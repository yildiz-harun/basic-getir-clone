import React from "react";
import classes from "./Hero.module.css";
import heroPhoto from "../../img/heroPhoto.jpg";

function Hero() {
  return (
    <div className={classes.Hero}>
      <div className={classes.container}>
        <img className={classes.heroPhoto} src={heroPhoto} alt={"heroPhoto"} />
        <div className={classes.gradientCover}></div>
        <div className={classes.leftSection}>
          <img
            className={classes.logo}
            src={
              "https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            }
            alt={"logo"}
          />
          <h1 className={classes.slogan}>
            Dakikalar içinde
            <br /> kapınızda
          </h1>
        </div>
        <div className={classes.rightSection}>
          <div className={classes.loginText}>Giriş yap veya kayıt ol</div>
          <div className={classes.phoneContainer}>
            <select className={classes.phoneSelect} name="phone">
              <option>+90</option>
            </select>
            <input
              className={classes.phoneInput}
              placeholder={"Telefon numarası"}
            ></input>
          </div>
          <button className={classes.phoneButton}>Telefon numarası ile devam et</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
