import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <a href={"/"} className={classes.leftItem}>
            getir
          </a>
          <a href={"/"} className={classes.leftItem}>
            getiryemek
          </a>
          <a href={"/"} className={classes.leftItem}>
            getirbüyük
          </a>
          <a href={"/"} className={classes.leftItem}>
            getirsu
          </a>
        </div>
        <div className={classes.rightContainer}>
          <a href={"/"} className={classes.rightItem}>
            Türkçe
          </a>
          <a href={"/"} className={classes.rightItem}>
            Giriş Yap
          </a>
          <a href={"/"} className={classes.rightItem}>
            Kayıt Ol
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
