import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { contactFormTemplate } from '@/lib/emailReceivedTemplate';
import { autoReplyTemplate } from '@/lib/autoreplyEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, purpose, commentMessage } = body;

    // Validasi
    if (!firstName || !lastName || !email || !purpose || !commentMessage) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Generate HTML dari template untuk notifikasi
    const emailHtml = contactFormTemplate({
      firstName,
      lastName,
      email,
      purpose,
      commentMessage
    });

    // 1. Kirim email notifikasi ke tim (existing)
    const notificationData = await resend.emails.send({
      from: 'iVolks Creative Mailing System <contact@ivolkscreative.com>',
      to: 'contact@ivolkscreative.com',
      replyTo: email,
      subject: `New Request Received: ${purpose} - ${firstName} ${lastName}`,
      html: emailHtml,
    });

    console.log('Notification email sent successfully:', notificationData);

    // Generate HTML untuk auto-reply
    const autoReplyHtml = autoReplyTemplate({
      firstName,
      lastName,
      purpose,
      commentMessage
    });

    // 2. Kirim auto-reply ke user
    const autoReplyData = await resend.emails.send({
      from: 'iVolks Creative <contact@ivolkscreative.com>',
      to: email,
      subject: 'Thank you for contacting iVolks Creative!',
      html: autoReplyHtml,
    });

    console.log('Auto-reply email sent successfully:', autoReplyData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        notificationId: notificationData.data?.id,
        autoReplyId: autoReplyData.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}