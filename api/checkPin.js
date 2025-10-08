// /api/checkPin.js
export default function handler(req, res) {
  // Allow GET for testing
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Use POST to send PIN' });
  }

  // Only POST is allowed for actual login
  if (req.method === 'POST') {
    try {
      const { pin } = req.body;

      // Get your PIN from environment variable (set in Vercel)
      const correctPin = process.env.ACCESS_PIN;

      if (!pin) {
        return res.status(400).json({ success: false, message: 'PIN is required' });
      }

      if (pin === correctPin) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(401).json({ success: false, message: 'Incorrect PIN' });
      }
    } catch (error) {
      console.error('Server error:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }

  // All other methods not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}
