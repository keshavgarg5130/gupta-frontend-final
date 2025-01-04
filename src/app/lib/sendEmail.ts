'use server'

import enquiryForm from '../interfaces/enquiryForm'
import nodemailer from 'nodemailer'

const SMTP_HOST = 'smtp.sendgrid.net'
const SMTP_PORT = 587
const SMTP_USER = 'apikey'
const SMTP_PASSWORD = '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'

const sendEmail = async (formData: enquiryForm) => {
	try {
		// Create a transporter using SMTP
		const transporter = nodemailer.createTransport({
			host: SMTP_HOST,
			port: SMTP_PORT,
			secure: false, // Use TLS
			auth: {
				user: SMTP_USER,
				pass: SMTP_PASSWORD,
			},
		})

		// Prepare email content
		const mailOptions = {
			from: SMTP_USER,
			to: 'sales@yourcompany.com', // Replace with your sales email
			subject: 'New Quotation Request',
			text: `
        New quotation request from:
        
        Full Name: ${formData.name}
        Email: ${formData.email}
        
        Product Details:
      `,
			attachments: formData.file ? [{
				filename: formData.file.name,
				content: Buffer.from(await formData.file.arrayBuffer())
			}] : [],
		}

		// Send the email
		transporter.sendMail(mailOptions)

		return {
			success: true,
			message: 'Quotation request sent successfully!'
		}
	} catch (error) {
		console.error('Error sending email:', error)
		return {
			success: false,
			message: 'Failed to send quotation request. Please try again.'
		}
	}
}

export default sendEmail;
/* const TOKEN = "063b053a17122fbf1db8f76a72335040";

const transport = nodemailer.createTransport(
	MailtrapTransport({
		token: TOKEN,
	})
);
const sender = {
	address: "hello@demomailtrap.com",
	name: "Order taken",
};
const recipients = [
	"jrag137@gmail.com",
];
if (isImage) {
	text = `<a href="${text}"/>`
} else {
	text = `<p>${text}</p>`
}
let sentObject = {
	from: sender,
	to: recipients,
	subject,
	category,
	html: text
}


return await new Promise((resolve, reject) => {
	transport
		.sendMail(sentObject)
		.then((result) => {
			console.log(result.success)
			resolve('email send successfully')
		}, err => {
			console.log(err)
			resolve('email was not sent')
		});

}) */
