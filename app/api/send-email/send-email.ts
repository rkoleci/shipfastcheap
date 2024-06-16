import { sendEmail } from '@/utils/mailgun';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    try {
      const result = await sendEmail(to, subject, text);
      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
