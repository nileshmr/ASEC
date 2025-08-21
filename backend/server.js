// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// MongoDB Connection 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Mongoose Schema/Model 
const studentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  dob: String,
  course: String,
  category: String,
  rollNumber: { type: String, unique: true }
}, { timestamps: true, collection: 'students_admission' });

const Student = mongoose.model('Student', studentSchema);

// Contact Schema/Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Newsletter Schema/Model
const newsletterSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});
const Newsletter = mongoose.model('Newsletter', newsletterSchema);

// Express App Setup 
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Roll Number Generator 
function generateRollNumber() {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `ASEC-${randomNum}`;
}

// Nodemailer Transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // 465 = secure
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Verify SMTP connection at startup
transporter.verify().then(() => {
  console.log('📧 SMTP ready (transporter verified)');
}).catch(err => {
  console.error('⚠️ SMTP verify failed:', err.message);
});

// Routes 

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, phone, email, dob, course, category } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !dob || !course || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Ensure unique roll number
    let rollNumber;
    let exists = true;
    while (exists) {
      rollNumber = generateRollNumber();
      exists = await Student.exists({ rollNumber });
    }

    // Save student
    const student = new Student({ name, phone, email, dob, course, category, rollNumber });
    await student.save();

    // Email subject
    const subject = 'ASEC | Registration Successful';

    // HTML Email Template
    const html = `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width:600px; margin:0 auto; background:#f9fbfd; padding:24px; border-radius:12px; border:1px solid #e5eaf0;">
        
        <!-- Header -->
        <div style="text-align:center; margin-bottom:20px;">
          <h1 style="color:#1a73e8; margin:0; font-size:24px;">Afrin Sumeet Engineering College</h1>
          <p style="color:#555; margin:4px 0 0; font-size:15px;">Admissions Office</p>
        </div>

        <!-- Body -->
        <div style="background:#fff; border-radius:10px; padding:20px; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
          <h2 style="color:#222; margin-top:0;">Welcome, ${name} 🎓</h2>
          <p style="color:#444; font-size:15px; line-height:1.6;">
            Thank you for registering at <strong>Afrin Sumeet Engineering College (ASEC)</strong>.<br/>
            Your registration has been <span style="color:green; font-weight:bold;">successfully completed</span>.
          </p>

          <!-- Roll Number Box -->
          <div style="margin:20px 0; background:#f1f5ff; border:1px solid #d6e0ff; padding:14px; border-radius:8px; font-size:16px; text-align:center;">
            <strong style="color:#1a73e8;">Your Roll Number:</strong><br/>
            <span style="font-size:20px; font-weight:bold; color:#111;">${rollNumber}</span>
          </div>

          <!-- Course & Category -->
          <p style="font-size:15px; color:#333; margin-bottom:12px;">
            <strong>Course:</strong> ${String(course).toUpperCase()} <br/>
            <strong>Category:</strong> ${category}
          </p>

          <!-- CTA -->
          <div style="text-align:center; margin-top:28px;">
            <a href="http://localhost:5173/" target="_blank"
               style="background:#1a73e8; color:#fff; padding:12px 24px; border-radius:6px; text-decoration:none; font-weight:bold; font-size:15px; display:inline-block; box-shadow:0 2px 6px rgba(0,0,0,0.15);">
              View Admission Portal
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align:center; margin-top:20px; font-size:13px; color:#777;">
          <p style="margin:0;">Regards,<br/>ASEC Admissions Office</p>
          <hr style="margin:16px 0; border:none; border-top:1px solid #eee;" />
          <p style="margin:0;">ASEC Campus, Bihar, India</p>
          <p style="margin:0;">
            <span style="margin-right:8px;">&#9993; admissions@asec.edu</span>
            <span>|</span>
            <span style="margin-left:8px;">&#128222; +91-8271374267</span>
          </p>
        </div>
      </div>
    `;

    // Plain Text fallback
    const text = `
Afrin Sumeet Engineering College (ASEC) - Admissions Office

Hi ${name},

Thank you for registering! Your registration is successful.

Roll Number: ${rollNumber}
Course: ${String(course).toUpperCase()}
Category: ${category}

You can now visit the Admission Portal for next steps: http://localhost:5173/

Regards,
ASEC Admissions Office
Email: admissions@asec.edu | Phone: +91-9876543210
`.trim();

    // Send Email
    let emailSent = false;
    try {
      await transporter.sendMail({
        from: `ASEC Admission <${process.env.SMTP_USER}>`, // <-- always use ASEC Admissions here
        to: email,
        subject,
        text,
        html
      });
      emailSent = true;
    } catch (mailErr) {
      console.error('✉️ Email send failed:', mailErr.message);
    }

    // Final Response
    return res.status(201).json({
      message: 'Registration successful',
      rollNumber,
      emailSent
    });

  } catch (err) {
    console.error('Registration error:', err);

    if (err && err.code === 11000) {
      return res.status(409).json({ error: 'A duplicate roll number was generated. Please try again.' });
    }
    return res.status(500).json({ error: 'Registration failed' });
  }
});



// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});


// Newsletter subscription endpoint from footer
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  // Accept any valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  try {
    // Check if already subscribed
    const exists = await Newsletter.exists({ email });
    if (exists) {
      return res.status(409).json({ error: 'Already subscribed from this email.' });
    }
    await Newsletter.create({ email });

    const subject = "Welcome to the ASEC Community! 🎉";

    const html = `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background:#f0f4f8; padding:30px; border-radius:12px; text-align:center;">
        <div style="max-width:500px; margin:0 auto; background:#ffffff; border-radius:15px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.1);">
          
          <div style="background-color:#1a73e8; padding:40px 20px;">
            <h1 style="color:#ffffff; font-size:28px; font-weight:bold; margin-bottom:10px;">
              Welcome to the ASEC Family!
            </h1>
            <p style="color:#e0eaff; font-size:16px;">
              Your subscription is confirmed. Get ready for awesome updates!
            </p>
          </div>
          
          <div style="padding:30px 20px;">
            <p style="color:#555555; font-size:16px; line-height:1.6; margin-bottom:25px;">
              Thanks for joining our community! You're now officially on the list to receive our latest news,
              stories, and updates directly from the campus.
            </p>
            
            <ul style="list-style:none; padding:0; margin-bottom:25px; text-align:left; font-size:15px; color:#333;">
              <li style="display:flex; align-items:center; margin-bottom:15px;">
                <span style="color:#1a73e8; margin-right:10px; font-size:20px;">&#10003;</span>
                <span style="font-weight:600;">Campus News:</span> Stay up-to-date with what’s happening at ASEC.
              </li>
              <li style="display:flex; align-items:center; margin-bottom:15px;">
                <span style="color:#1a73e8; margin-right:10px; font-size:20px;">&#10003;</span>
                <span style="font-weight:600;">Events & Workshops:</span> Never miss a fun event or career-boosting workshop.
              </li>
              <li style="display:flex; align-items:center; margin-bottom:15px;">
                <span style="color:#1a73e8; margin-right:10px; font-size:20px;">&#10003;</span>
                <span style="font-weight:600;">Student Success Stories:</span> Get inspired by your fellow students.
              </li>
            </ul>
            
            <a href="${process.env.APP_URL}" target="_blank"
               style="background-color:#1a73e8; color:#ffffff; text-decoration:none; padding:15px 30px; border-radius:30px; font-weight:bold; display:inline-block; box-shadow:0 5px 15px rgba(26, 115, 232, 0.3);">
              Explore the Campus
            </a>
          </div>
          
          <div style="background-color:#f8f9fa; padding:20px; border-top:1px solid #e0e0e0;">
            <p style="color:#777777; font-size:13px; margin:0;">
              You received this email because you subscribed to the ASEC newsletter.<br>
              <a href="#" style="color:#1a73e8; text-decoration:none;">Unsubscribe</a>
            </p>
          </div>
          
        </div>
      </div>
    `;

    const text = `
Welcome to the ASEC Community! 🎉

Thanks for subscribing to the Afrin Sumeet Engineering College newsletter.

You're now on the list to receive the latest campus news, upcoming events, and student success stories directly to your inbox.

What to expect:
- Campus News
- Events & Workshops
- Student Success Stories

Visit our website for more information: ${process.env.APP_URL}

We're excited to have you with us!

Regards,
The ASEC Team
    `.trim();

    try {
      await transporter.sendMail({
        from: `ASEC Newsletter <${process.env.SMTP_USER}>`, // <-- always use ASEC Newsletter here
        to: email,
        subject,
        text,
        html
      });
    } catch (mailErr) {
      console.error('✉️ Newsletter email send failed:', mailErr.message);
      // Continue, don't fail the subscription
    }

    return res.status(201).json({ message: 'Subscribed successfully.' });
  } catch (err) {
    return res.status(500).json({ error: 'Subscription failed.' });
  }
});



// Start Server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});