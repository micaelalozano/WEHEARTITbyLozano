import React from "react";
import eyes from "../assets/eyes.jpg";
import golden from "../assets/golden.jpeg";
import ring from "../assets/ring.jpg";
import bed from "../assets/bed.jpg";
import tattoo from "../assets/tattoo.jpg";
import logo from "../assets/profile.png";
//Estilos
import "../estilos/masReciente.css";

const MasReciente = () => {
  return (
    <>
      <div className="contenedor-recientes">
        <div className="contenedor-uno">
          <img className="img-art" src={eyes} alt="Pic" />
          <div className="reciente-texto">
            <p className="p-1">The unwanted lover</p>
            <p className="p-2">
              You've been living in my mind free lately, It's been a while since
              that day, What can I do about it when I'm not the one.
            </p>
            <p className="p-3">Leer más ›</p>
          </div>
          <div className="cont-dos">
            <img className="logo-recent" src={logo} alt="+" />
            <p className="hearts">500 HEARTS</p>
          </div>
        </div>

        <div className="contenedor-uno">
          <img className="img-art" src={golden} alt="Pic" />
          <div className="reciente-texto">
            <p className="p-1">Expressions of love in Arabic</p>
            <p className="p-2">
              Hello everyone, I have begun studying Arabic for the past month.
              And I think Arabic is a beautiful language and i just...
            </p>
            <p className="p-3">Leer más ›</p>
          </div>
          <div className="cont-dos">
            <img className="logo-recent" src={logo} alt="+" />
            <p className="hearts">315 HEARTS</p>
          </div>
        </div>

        <div className="contenedor-uno">
          <img className="img-art" src={ring} alt="Pic" />
          <div className="reciente-texto">
            <p className="p-1">Motivation vs. Discipline</p>
            <p className="p-2">
              Motivation cannot sustain you for long. motivation fades. it comes
              and goes based on moods and feelings.
            </p>
            <p className="p-3">Leer más ›</p>
          </div>
          <div className="cont-dos">
            <img className="logo-recent" src={logo} alt="+" />
            <p className="hearts">723 HEARTS</p>
          </div>
        </div>

        <div className="contenedor-uno">
          <img className="img-art" src={bed} alt="Pic" />
          <div className="reciente-texto">
            <p className="p-1">My advice to younger women</p>
            <p className="p-2">
              if you’re 15 to 22 and you follow me, please listen to the
              following advice: 1. Never give up opportunities...
            </p>
            <p className="p-3">Leer más ›</p>
          </div>
          <div className="cont-dos">
            <img className="logo-recent" src={logo} alt="+" />
            <p className="hearts">795 HEARTS</p>
          </div>
        </div>

        <div className="contenedor-uno">
          <img className="img-art" src={tattoo} alt="Pic" />
          <div className="reciente-texto">
            <p className="p-1">Introducing myself in pictures</p>
            <p className="p-2">
              Hello lovely people of WHI! It's been a while since I made an
              article, but after finding this simple, pretty one I ..
            </p>
            <p className="p-3">Leer más ›</p>
          </div>
          <div className="cont-dos">
            <img className="logo-recent" src={logo} alt="+" />
            <p className="hearts">188 HEARTS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasReciente;
