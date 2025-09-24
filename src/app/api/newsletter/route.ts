import { NextRequest, NextResponse } from 'next/server';
import { sendNewsletterWelcomeEmail, sendNewsletterNotification, NewsletterFormData } from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterFormData = await request.json();

    // Validation
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedData: NewsletterFormData = {
      email: body.email.trim().toLowerCase(),
    };

    // Send welcome email to subscriber
    await sendNewsletterWelcomeEmail(sanitizedData);

    // Send notification to admin
    await sendNewsletterNotification(sanitizedData.email);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}