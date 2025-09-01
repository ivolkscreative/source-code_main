// File: src/app/api/contact/route.js
import { NextResponse } from 'next/server';

// Tambahkan runtime config untuk Vercel
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  // Add CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await request.json();
    
    // Validasi input
    const { firstName, lastName, email, purpose, commentMessage } = body;
    
    // Log untuk debugging di Vercel
    console.log('API Route hit:', {
      timestamp: new Date().toISOString(),
      hasBody: !!body,
      fields: { firstName: !!firstName, lastName: !!lastName, email: !!email, purpose: !!purpose, commentMessage: !!commentMessage }
    });
    
    if (!firstName || !lastName || !email || !purpose || !commentMessage) {
      return NextResponse.json(
        { error: 'Please fill all of these forms' },
        { status: 400, headers: corsHeaders }
      );
    }
    
    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid Email Format' },
        { status: 400, headers: corsHeaders }
      );
    }
    
    // Log data untuk tracking
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      purpose,
      commentMessage,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown'
    });
    
    // Untuk production di Vercel, kita tidak bisa write file
    // Jadi kita skip bagian file saving
    
    // Simulasi processing - di production ganti dengan real email service
    await processContactSubmission({
      firstName,
      lastName,
      email,
      purpose,
      commentMessage
    });
    
    return NextResponse.json(
      { 
        message: 'Thanks for reaching out! We will get back to you soon.',
        success: true,
        timestamp: new Date().toISOString()
      },
      { status: 200, headers: corsHeaders }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Server Error. Please try again later.',
        success: false,
        debug: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

// Handle OPTIONS untuk CORS preflight
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// GET endpoint untuk testing
export async function GET(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  return NextResponse.json(
    { 
      message: 'Contact API is working on Vercel!',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'unknown',
      vercel: process.env.VERCEL || 'false'
    },
    { status: 200, headers: corsHeaders }
  );
}

// Process contact submission
async function processContactSubmission(data) {
  // Log untuk Vercel functions
  console.log('Processing contact submission:', {
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    purpose: data.purpose,
    timestamp: new Date().toISOString()
  });
  
  // Simulasi delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Di sini bisa integrate dengan:
  // 1. Vercel KV untuk storage
  // 2. External webhook
  // 3. Email service (Resend, SendGrid, dll)
  // 4. Database (PlanetScale, Supabase, dll)
  
  // Contoh: kirim ke webhook external
  if (process.env.WEBHOOK_URL) {
    try {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      console.log('Webhook sent successfully');
    } catch (webhookError) {
      console.error('Webhook error:', webhookError);
    }
  }
  
  return true;
}