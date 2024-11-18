import nodemailer from "nodemailer";
require('dotenv').config();

export default async function (req, res) {
  if (req.method === "POST") {
    const { name, email, message, duration, budget, mobile } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.your-email-provider.com", // e.g., smtp.gmail.com
      port: 465, // Or 465 for SSL
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.PASSWORD, // Your email password or app-specific password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender name and email
        to: "business-email@example.com", // Your business email
        subject: "New Contact Form Submission",
        text: message, // Plain text body
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mobile:</strong> ${mobile}</p>
               <p><strong>Budget:</strong> ${budget}</p>
               <p><strong>Duration:</strong> ${duration}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`, // HTML body
      });

      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
