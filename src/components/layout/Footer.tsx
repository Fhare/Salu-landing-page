import WhatsApp from "../../assets/whatsapp.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

import "./footer.scss";

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Sua jornada</li>
          <li>Contato</li>
        </ul>


        <div className="right-footer-content">
          <h3>Salu</h3>
          <p>Descrição</p>

          <div className="social">
            <span>Sociais</span>

            <div className="icons">
              <img src={WhatsApp} alt="whatsapp" />
              <img src={Facebook} alt="facebook" />
              <img src={Instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </div>

      <strong>© 2022 Salu marketing digital. Made with love.</strong>
    </footer>
  );
}