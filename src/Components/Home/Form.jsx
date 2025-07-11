import { useState } from 'react';
import './PapOrderForm.css';

function PapOrderForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mqabrlee", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="form-section">
      <h2>Place Your Pap Order</h2>

      {submitted && (
        <p className="success-message">
          ✅ Your order has been received! We'll contact you shortly.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Phone Number:</label>
        <input type="tel" name="phone" required />

        <label>Address:</label>
        <textarea name="address" rows="3" required></textarea>

        <label>Number of KG:</label>
        <input type="number" name="kg" min="1" required />

        <label>Choose Pap Variety:</label>
        <select name="variety" required>
          <option value="">-- Select --</option>
          <option value="Yellow Pap">Yellow Pap</option>
          <option value="White Pap">White Pap</option>
          <option value="Guinea Corn Pap">Guinea Corn Pap</option>
          <option value="Yellow Pap with Ginger">Yellow Pap with Ginger</option>
          <option value="Guinea Corn with Ginger">Guinea Corn with Ginger</option>
          <option value="White Pap with Ginger">White Pap with Ginger</option>
        </select>

        <label>Payment Method:</label>
        <select name="payment_method" required>
          <option value="">-- Select --</option>
          <option value="Cash">Cash</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="POS">POS</option>
        </select>

        <button type="submit">Submit Order</button>
      </form>
    </section>
  );
}

export default PapOrderForm;
