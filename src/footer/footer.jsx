import React from "react";
import "./footer.css";
import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";

export const FooterSpace = () => {
  return (
    <>
      <div className="footer-content">
        <div className="social-media">
          <h4 className="social-media-h4">Redes Sociales</h4>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <FacebookOutlined />
              <a href="https://www.facebook.com/tupagina" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <InstagramOutlined />
              <a href="https://www.instagram.com/tuinstagram" target="_blank">
                Instagram
              </a>
            </li>
            {/* Agrega más enlaces de redes sociales según sea necesario */}
          </ul>
        </div>
        <div className="address">
          <h4 className="address-h4">Dirección del Local</h4>
          <p className="footer-paragraph">Tu dirección aquí</p>
        </div>
        <div className="opening-hours">
          <h4 className="opening-hours-h4">Horarios de Atención</h4>
          <p className="footer-paragraph">
            <span className="bold-text">Lunes - Viernes:</span> 9:00 AM - 6:00
          </p>
          <p className="footer-paragraph">
            <span className="bold-text">Sábado:</span> 10:00 AM - 4:00 PM
          </p>
          <p className="footer-paragraph">
            <span className="bold-text">Domingo:</span> Cerrado
          </p>
        </div>
      </div>
      <div className="copyright">
        <p className="footer-paragraph">
          &copy; 2023 MKWebDevelop. Todos los derechos reservados.
        </p>
      </div>
    </>
  );
};
