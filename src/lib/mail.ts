import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, phone, message } = data;

  console.log('SMTP Configuration:', {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    from: process.env.SMTP_FROM_EMAIL,
    to: process.env.CONTACT_TO_EMAIL
  });

  const mailOptions = {
    from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
    to: process.env.CONTACT_TO_EMAIL || 'contact@glowsoft.fr',
    replyTo: `<${email}>`,
    subject: `New contact request from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #473FB9 0%, #9512B6 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #473FB9; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #e0e0e0; }
            .message { white-space: pre-wrap; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Message:</div>
                <div class="value message">${message}</div>
              </div>

              <div class="footer">
                <p>This email was sent from the Visuaal contact form.</p>
                <p>Date: ${new Date().toLocaleString('en-US')}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      New Contact Request

      Name: ${name}
      Email: ${email}
      ${phone ? `Phone: ${phone}` : ''}

      Message:
      ${message}

      ---
      Sent from Visuaal contact form on ${new Date().toLocaleString('en-US')}
    `,
  };

  try {
    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', {
      messageId: result.messageId,
      response: result.response,
      accepted: result.accepted,
      rejected: result.rejected
    });

    return result;
  } catch (error) {
    console.error('SMTP Error details:', error);
    throw error;
  }
}

export async function sendNewsletterWelcomeEmail(data: NewsletterFormData) {
  const { email } = data;

  const mailOptions = {
    from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
    to: email,
    subject: 'Welcome to the Visuaal Newsletter',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #473FB9 0%, #9512B6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: linear-gradient(135deg, #473FB9 0%, #9512B6 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666; text-align: center; }
            h1 { margin: 0; }
            h2 { color: #473FB9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to the Visuaal Newsletter!</h1>
            </div>
            <div class="content">
              <h2>Thank you for subscribing!</h2>

              <p>We're delighted to welcome you to our community. You'll be the first to know about:</p>

              <ul>
                <li>The latest innovations in digital signage</li>
                <li>Industry trends and insights</li>
                <li>Product updates and launches</li>
                <li>Exclusive offers and events</li>
              </ul>

              <p>Stay connected for our upcoming newsletters filled with valuable content to transform your visual communication.</p>

              <div style="text-align: center;">
                <a href="https://visuaal.com" class="button">Visit our website</a>
              </div>

              <div class="footer">
                <p>You are receiving this email because you subscribed to the Visuaal newsletter.</p>
                <p>© ${new Date().getFullYear()} Visuaal. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Welcome to the Visuaal Newsletter!

      Thank you for subscribing!

      We're delighted to welcome you to our community. You'll be the first to know about:
      - The latest innovations in digital signage
      - Industry trends and insights
      - Product updates and launches
      - Exclusive offers and events

      Stay connected for our upcoming newsletters filled with valuable content.

      Visit our website: https://visuaal.com

      ---
      © ${new Date().getFullYear()} Visuaal. All rights reserved.
    `,
  };

  return await transporter.sendMail(mailOptions);
}

export async function sendNewsletterNotification(email: string) {
  const mailOptions = {
    from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
    to: process.env.CONTACT_TO_EMAIL || 'contact@visuaal.ae',
    subject: 'New newsletter subscription',
    html: `
      <h3>New newsletter subscription</h3>
      <p>Email : ${email}</p>
      <p>Date: ${new Date().toLocaleString('en-US')}</p>
    `,
  };

  return await transporter.sendMail(mailOptions);
}