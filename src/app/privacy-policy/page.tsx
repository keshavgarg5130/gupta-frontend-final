const PrivacyPolicyPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Privacy Policy</h1>

            <p>
                <strong>Effective Date:</strong> 06/01/2025
            </p>

            <h2>Introduction</h2>
            <p>
                Welcome to our e-commerce platform. We are committed to protecting your privacy and ensuring the
                security of your personal information. This Privacy Policy explains how we collect, use, and protect
                the information you provide to us while using our website.
            </p>

            <h2>Information We Collect</h2>
            <ul>
                <li><strong>Personal Information:</strong> Name, phone number, email address, shipping address, and billing details.</li>
                <li><strong>Payment Information:</strong> While we process payments through PhonePe, we do not store sensitive payment details such as card numbers or UPI IDs. All payment information is securely processed by PhonePe.</li>
                <li><strong>Device Information:</strong> IP address, browser type, and operating system.</li>
                <li><strong>Behavioral Information:</strong> Interaction with our website, including browsing and purchase history.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information collected for the following purposes:</p>
            <ul>
                <li>To process and fulfill your orders.</li>
                <li>To provide customer support and respond to your inquiries.</li>
                <li>To improve the functionality and user experience of our website.</li>
                <li>To ensure secure transactions through PhonePe and prevent fraudulent activities.</li>
            </ul>

            <h2>Data Security</h2>
            <p>
                We take data security seriously and implement robust measures to protect your personal information.
                Our website uses encryption and secure servers to safeguard your data. Additionally, all payments are
                securely processed through PhonePe, a trusted payment gateway.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
                Our website uses cookies to improve your browsing experience and provide personalized services. You
                can manage your cookie preferences through your browser settings.
            </p>

            <h2>Third-Party Services</h2>
            <p>
                We work with third-party services such as PhonePe for payment processing. These services have their
                own privacy policies, and we encourage you to review them.
            </p>

            <h2>User Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
                <li>Access and review the information we have collected about you.</li>
                <li>Request corrections to inaccurate information.</li>
                <li>Request the deletion of your personal data, subject to legal and operational requirements.</li>
            </ul>
            <p>
                To exercise these rights, please contact us at <strong>info@guptaswitchgears.com</strong>.
            </p>

            <h2>Data Retention</h2>
            <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                this policy or to comply with legal obligations.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. Any updates will be posted on this page with the updated effective date.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p>
                <strong>Email:</strong> info@guptaswitchgears.com<br />
                <strong>Phone:</strong> +91 9311440607<br />
                <strong>Address:</strong> Shop No. 4 & 5, G. T. Road Opposite Ramlila Maidan, Ghaziabad, Uttar Pradesh 201001
            </p>

            <p style={{ textAlign: 'center', marginTop: '30px' }}>
                Thank you for trusting us with your personal information.
            </p>
        </div>
    );
};

export default PrivacyPolicyPage;
