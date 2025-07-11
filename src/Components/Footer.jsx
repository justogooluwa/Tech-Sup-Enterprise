import './Footer.css';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p><FaPhone /> <strong>08022013794</strong></p>
        <p>
          <FaEnvelope /> <a href="mailto:techsup25@gmail.com">techsup25@gmail.com</a>
        </p>
        <p>
          <FaInstagram /> <a href="https://instagram.com/goodmorningpap" target="_blank" rel="noreferrer">@goodmorningpap</a>
        </p>
        <p>
          <FaWhatsapp /> <a href="https://wa.me/2348022013794" target="_blank" rel="noreferrer">Chat us on WhatsApp</a>
        </p>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Good Morning Pap. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
