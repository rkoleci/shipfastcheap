import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
});

export const sendEmail = (to: string, subject: string, text: string) => {
  const data = {
    from: 'Your Name <your-email@example.com>',
    to,
    subject,
    text,
  };

  return mg.messages.create(process.env.MAILGUN_DOMAIN || '', data);
};
