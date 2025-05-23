export const metadata = {
    title: 'Gupta Switchgear | Shipping Policy',
    description: 'We offer fast and reliable shipping services to ensure your products reach you in the fastest possible time. We use a combination of ground and air transportation to get your orders to you as quickly as possible. We also offer international shipping to many countries around the world. We take great care in packaging your products to ensure they arrive in perfect condition. We use sturdy boxes and packing materials to protect your items during transit. We also provide tracking information so you can track your order every step of the way. We are committed to providing the best possible shipping experience for our customers. We are constantly working to improve our shipping services and to provide the best possible service to our customers.',
    alternates: {
        canonical: "https://guptaswitchgears.com/shipping-policy",
    },
    robots: {
        index: true, //
        follow: true,}
}
const ShippingPolicyPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Shipping Policy</h1>

            <h2>Delivery Timeline</h2>
            <p>
                We strive to deliver your products within <strong>5 to 10 business days</strong> from the date of purchase.
                Please note that delivery times may vary depending on your location and any unforeseen circumstances.
            </p>

            <h2>Shipping Charges</h2>
            <p>
                Shipping charges may apply depending on the total value of your order. These charges, if applicable, will be
                clearly displayed at checkout before you confirm your purchase.
            </p>

            <h2>Cash on Delivery (COD)</h2>
            <p>
                For customers opting for <strong>Cash on Delivery (COD)</strong> as a payment method, an additional fee of
                <strong>1%</strong> of the total order value will be applied. This fee covers the cost of handling and processing COD orders.
            </p>

            <h2>Additional Notes</h2>
            <ul>
                <li>We currently deliver to select locations. Please check if your address is serviceable during checkout.</li>
                <li>Orders placed on weekends or public holidays will be processed on the next business day.</li>
                <li>If there are any delays in delivery, we will inform you promptly via email or phone.</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
                If you have any questions or concerns about our shipping policy, feel free to contact us:
            </p>
            <p>
                <strong>Email:</strong> info@guptaswitchgears.com<br />
                <strong>Phone:</strong> +91 9311440607<br />
                <strong>Address:</strong> Shop No. 4 & 5, G. T. Road Opposite Ramlila Maidan, Ghaziabad, Uttar Pradesh 201001
            </p>

            <p style={{ textAlign: 'center', marginTop: '30px' }}>
                Thank you for shopping with us. We look forward to serving you!
            </p>
        </div>
    );
};

export default ShippingPolicyPage;