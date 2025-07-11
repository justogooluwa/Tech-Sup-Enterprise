import './AboutUs.css';
import papImage from '../../assets/papakara.jpg'; // your pap image

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text" data-aos="fade-right">
          <h1 className="about-bg">ABOUT US</h1>
          <h2 className="about-title">ABOUT US</h2>
          <p className="about-description">
            We’re on a mission to bring the rich tradition of **locally made pap (akamu)** to your table — fresh, smooth, and naturally fermented. Whether you’re craving the classic taste or something spiced with ginger, we’ve got you covered.
            <br /><br />
            Our pap is made with **100% natural ingredients**, no preservatives, and packaged with hygiene and care. We believe pap should be more than a meal — it should be a **taste of home**.
            <br /><br />
            <strong>Our Varieties:</strong><br />
            • Yellow Pap<br />
            • Guineacorn with Ginger<br />
            • White Pap<br />
            • Guineacorn Pap<br />
            • Yellow Pap with Ginger<br />
            • White Pap (Classic)<br /><br />

            Millet Products Fortified With Soyabeans
          </p>
        </div>

        <div className="about-image" data-aos="fade-left">
          <img src={papImage} alt="Pap varieties" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
