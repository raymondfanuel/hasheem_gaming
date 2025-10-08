export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { pin } = req.body;
  const correctPin = process.env.ACCESS_PIN; // Secure environment variable

  if (pin === correctPin) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}

