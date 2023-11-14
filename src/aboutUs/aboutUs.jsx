import React from "react";
import "./aboutUs.css";
import { ChefList } from "../components/chefs";

export const AboutUs = () => {
  return (
    <>
      <div className="about">
        <h1 className="about-h1">About Us</h1>
        <p className="about-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae itaque
          labore, incidunt quia, at possimus nihil tenetur, sed fuga
          necessitatibus tempore odio? Laborum aliquid laudantium quod,
          similique vel eos autem.
        </p>
      </div>
      <div className="inaguration">
        <img
          className="inaguration-img"
          src="assets/inaguracion.jpg"
          alt="Inauguración de la panadería"
        />
        <div className="inaguration-text">
          <h2 className="inaguration-text-h2">
            Founded in 1975 by Juan Carlos
          </h2>
          <p className="inaguration-text-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            inventore minus sit nisi aliquid delectus quis provident non
            impedit, nihil, tenetur et deleniti aut consequuntur tempore
            accusantium officia quibusdam odit?
          </p>
        </div>
      </div>
      <div className="chefs">
        <ChefList />
      </div>
    </>
  );
};
