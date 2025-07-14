import express from 'express';
import cors from 'cors';
import { generatePassword } from './generator';

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.post('/api/generate-password', (req, res) => {
  const { length, includeLetters, includeNumbers, includeSpecial } = req.body;

  // basic validation
  if (
    typeof length !== 'number' ||
    typeof includeLetters !== 'boolean' ||
    typeof includeNumbers !== 'boolean' ||
    typeof includeSpecial !== 'boolean'
  ) {
    return res.status(400).json({ error: 'Invalid request payload' });
  }

  const password = generatePassword(
    length,
    includeLetters,
    includeNumbers,
    includeSpecial
  );
  res.json({ password });
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`⚡️ Password API listening on http://localhost:${PORT}`);
});
