import nodemailer from "nodemailer";
import 'dotenv/config'

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, duration, budget, mobile } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.mailersend.net", // e.g., smtp.gmail.com
      port: 587, // Or 465 for SSL
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.PASSWORD, // Your email password or app-specific password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender name and email
        to: "shsalman114@gmail.com", // Your business email
        subject: "New Lead form Submission",
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
