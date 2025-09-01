// File: src/app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validasi input
    const { firstName, lastName, email, purpose, commentMessage } = body;
    
    if (!firstName || !lastName || !email || !purpose || !commentMessage) {
      return NextResponse.json(
        { error: 'Please fill all of these forms' },
        { status: 400 }
      );
    }
    
    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid Email Format' },
        { status: 400 }
      );
    }
    
    // Log data untuk development (hapus di production)
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      purpose,
      commentMessage,
      timestamp: new Date().toISOString()
    });
    
    // Di sini Anda bisa:
    // 1. Simpan ke database
    // 2. Kirim email notification
    // 3. Integrate dengan third-party service (seperti EmailJS, SendGrid, dll)
    
    // Contoh: Simpan ke file JSON (untuk development)
    // Catatan: Ini hanya untuk testing, di production sebaiknya gunakan database
    if (process.env.NODE_ENV === 'development') {
      const fs = require('fs').promises;
      const path = require('path');
      
      try {
        const contactsFile = path.join(process.cwd(), 'contacts.json');
        let contacts = [];
        
        try {
          const existingData = await fs.readFile(contactsFile, 'utf8');
          contacts = JSON.parse(existingData);
        } catch (error) {
          // File doesn't exist yet, start with empty array
          contacts = [];
        }
        
        const newContact = {
          id: Date.now(),
          firstName,
          lastName,
          email,
          purpose,
          commentMessage,
          timestamp: new Date().toISOString()
        };
        
        contacts.push(newContact);
        
        await fs.writeFile(contactsFile, JSON.stringify(contacts, null, 2));
        console.log('Contact saved to contacts.json');
      } catch (fileError) {
        console.error('Error saving to file:', fileError);
        // Jangan return error, karena ini hanya untuk development
      }
    }
    
    // Simulasi pengiriman email (replace dengan service email yang sebenarnya)
    await simulateEmailSending({
      firstName,
      lastName,
      email,
      purpose,
      commentMessage
    });
    
    return NextResponse.json(
      { 
        message: 'Thanks for reaching out! We will get back to you soon.',
        success: true
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Simulasi pengiriman email
async function simulateEmailSending(data) {
  // Simulasi delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Email would be sent with data:', data);
  
  // Di production, replace dengan service email seperti:
  // - SendGrid
  // - Nodemailer dengan SMTP
  // - AWS SES
  // - EmailJS
  // - Resend
  
  return true;
}