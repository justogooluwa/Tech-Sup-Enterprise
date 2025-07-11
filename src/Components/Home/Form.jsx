import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import './PapOrderForm.css';

function PapOrderForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    kg: '',
    variety: '',
    payment_method: '',
  });

  const [showPaystack, setShowPaystack] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const publicKey = "pk_test_3b7f00777aea9e33f5be618df0b311493181cab3"; // replace with your Paystack public key
  const amount = parseInt(formData.kg || 0) * 500 * 100; // e.g. ₦500 per kg, in kobo

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaystackSuccess = async () => {
    // Send to Formspree after payment
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    await fetch("https://formspree.io/f/mnqwjxyz", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    setFormData({
      email: '',
      phone: '',
      address: '',
      kg: '',
      variety: '',
      payment_method: '',
    });
    setShowPaystack(false);
  };

  const paystackProps = {
    email: formData.email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: handlePaystackSuccess,
    onClose: () => alert("Payment cancelled"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.payment_method === "Paystack") {
      setShowPaystack(true); // trigger payment popup
    } else {
      handlePaystackSuccess(); // just treat as normal submit
    }
  };

  return (
    <section className="form-section">
      <h2>Place Your Pap Order</h2>

      {submitted && (
        <p className="success-message">
          ✅ Order received! Payment confirmed. We'll reach out shortly.
        </p>
      )}

      {!submitted && (
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Address:</label>
          <textarea name="address" rows="3" value={formData.address} onChange={handleChange} required></textarea>

          <label>Number of KG:</label>
          <input type="number" name="kg" min="1" value={formData.kg} onChange={handleChange} required />

          <label>Choose Pap Variety:</label>
          <select name="variety" value={formData.variety} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Yellow Pap">Yellow Pap</option>
            <option value="White Pap">White Pap</option>
            <option value="Guinea Corn Pap">Guinea Corn Pap</option>
            <option value="Yellow Pap with Ginger">Yellow Pap with Ginger</option>
            <option value="Guinea Corn with Ginger">Guinea Corn with Ginger</option>
            <option value="White Pap with Ginger">White Pap with Ginger</option>
          </select>

          <label>Payment Method:</label>
          <select name="payment_method" value={formData.payment_method} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Paystack">Pay Online</option>
          </select>

          {showPaystack ? <PaystackButton {...paystackProps} /> : <button type="submit">Submit</button>}
        </form>
      )}
    </section>
  );
}

export default PapOrderForm;
