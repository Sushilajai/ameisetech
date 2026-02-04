const express = require('express');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// Basic CORS handling (adjust ALLOWED_ORIGIN in .env if needed)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});
app.get("/health", (req, res) => {
  res.send("Node server is working");
});

app.post('/api/contact', async (req, res) => {
  const data = req.body || {};
  if (!data.fullName || !data.email || !data.phone) {
    return res.status(400).json({ error: 'Missing required fields: fullName, email, or phone' });
  }

  // ensure logs folder
  const logDir = path.join(__dirname, 'logs');
  fs.mkdirSync(logDir, { recursive: true });
  const logFile = path.join(logDir, 'contacts.log');

  const logEntry = {
    timestamp: new Date().toISOString(),
    data,
    status: 'pending',
  };

  // prepare transporter
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } catch (err) {
    logEntry.status = 'error';
    logEntry.error = err.toString();
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
    console.error('Transport init error', err);
    return res.status(500).json({ error: 'Mail transporter initialization failed' });
  }

  const mailOptions = {
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.TO_EMAIL || process.env.SMTP_USER,
    subject: `Contact form: ${data.fullName} (${data.organization || 'No Org'})`,
    text: `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nOrganization: ${data.organization || ''}\nDesignation: ${data.designation || ''}\nSector: ${data.sector || ''}\n\nMessage:\n${data.message || ''}`,
    html: `<p><strong>Name:</strong> ${data.fullName}</p>
           <p><strong>Email:</strong> ${data.email}</p>
           <p><strong>Phone:</strong> ${data.phone}</p>
           <p><strong>Organization:</strong> ${data.organization || ''}</p>
           <p><strong>Designation:</strong> ${data.designation || ''}</p>
           <p><strong>Sector:</strong> ${data.sector || ''}</p>
           <p><strong>Message:</strong><br/>${(data.message || '').replace(/\n/g, '<br/>')}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    logEntry.status = 'sent';
    logEntry.info = { messageId: info.messageId };
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
    return res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    logEntry.status = 'error';
    logEntry.error = err.toString();
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
    console.error('Send mail error', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/', (req, res) => res.send('Contact API running'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
