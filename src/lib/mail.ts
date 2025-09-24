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
    subject: `Nouvelle demande de contact de ${name}`,
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
              <h1>Nouvelle demande de contact</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nom :</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email :</div>
                <div class="value">${email}</div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="label">Téléphone :</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Message :</div>
                <div class="value message">${message}</div>
              </div>

              <div class="footer">
                <p>Cet email a été envoyé depuis le formulaire de contact Visuaal.</p>
                <p>Date : ${new Date().toLocaleString('fr-FR')}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Nouvelle demande de contact

      Nom: ${name}
      Email: ${email}
      ${phone ? `Téléphone: ${phone}` : ''}

      Message:
      ${message}

      ---
      Envoyé depuis le formulaire de contact Visuaal le ${new Date().toLocaleString('fr-FR')}
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
    subject: 'Bienvenue dans la newsletter Visuaal',
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
              <h1>Bienvenue dans la newsletter Visuaal !</h1>
            </div>
            <div class="content">
              <h2>Merci pour votre inscription !</h2>

              <p>Nous sommes ravis de vous accueillir dans notre communauté. Vous serez les premiers informés de :</p>

              <ul>
                <li>Les dernières innovations en affichage dynamique</li>
                <li>Les tendances et insights du secteur</li>
                <li>Les mises à jour et lancements de produits</li>
                <li>Les offres exclusives et événements</li>
              </ul>

              <p>Restez connectés pour nos prochaines newsletters remplies de contenu précieux pour transformer votre communication visuelle.</p>

              <div style="text-align: center;">
                <a href="https://visuaal.com" class="button">Visiter notre site</a>
              </div>

              <div class="footer">
                <p>Vous recevez cet email car vous vous êtes inscrit à la newsletter Visuaal.</p>
                <p>© ${new Date().getFullYear()} Visuaal. Tous droits réservés.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Bienvenue dans la newsletter Visuaal !

      Merci pour votre inscription !

      Nous sommes ravis de vous accueillir dans notre communauté. Vous serez les premiers informés de :
      - Les dernières innovations en affichage dynamique
      - Les tendances et insights du secteur
      - Les mises à jour et lancements de produits
      - Les offres exclusives et événements

      Restez connectés pour nos prochaines newsletters remplies de contenu précieux.

      Visitez notre site : https://visuaal.com

      ---
      © ${new Date().getFullYear()} Visuaal. Tous droits réservés.
    `,
  };

  return await transporter.sendMail(mailOptions);
}

export async function sendNewsletterNotification(email: string) {
  const mailOptions = {
    from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
    to: process.env.CONTACT_TO_EMAIL || 'contact@visuaal.ae',
    subject: 'Nouvelle inscription à la newsletter',
    html: `
      <h3>Nouvelle inscription à la newsletter</h3>
      <p>Email : ${email}</p>
      <p>Date : ${new Date().toLocaleString('fr-FR')}</p>
    `,
  };

  return await transporter.sendMail(mailOptions);
}