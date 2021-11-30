import React from "react";
import classes from "./Categories.module.css";
import coffee from "../../img/coffee.jpg";
import tomato from "../../img/tomato.jpg";
import toothbrush from "../../img/toothbrush.jpg";
import cloth from "../../img/cloth.jpg";

function Categories() {
  return (
    <div className={classes.Categories}>
      <div className={classes.container}>
        <div className={classes.header}>Kategoriler</div>
        <div className={classes.items}>
          <div className={classes.item}>
            <img
              className={classes.itemImage}
              src={coffee}
              alt={"coffee"}
            ></img>
            <div className={classes.itemName}>Yeni Ürünler</div>
          </div>
          <div className={classes.item}>
            <img
              className={classes.itemImage}
              src={tomato}
              alt={"tomato"}
            ></img>
            <div className={classes.itemName}>İndirimler</div>
          </div>
          <div className={classes.item}>
            <img
              className={classes.itemImage}
              src={toothbrush}
              alt={"toothbrush"}
            ></img>
            <div className={classes.itemName}>Su&İçecek</div>
          </div>
          <div className={classes.item}>
            <img className={classes.itemImage} src={cloth} alt={"cloth"}></img>
            <div className={classes.itemName}>Yeni Ürünler</div>
          </div>

          <div className={classes.item}>
            <img
              className={classes.itemImage}
              src={coffee}
              alt={"coffee"}
            ></img>
            <div className={classes.itemName}>Yeni Ürünler</div>
          </div>
          <div className={classes.item}>
            <img
              className={classes.itemImage}
              src={tomato}
              alt={"tomato"}
            ></img>
            <div className={classes.itemName}>İndirimler</div>
          </div>
          <div className={classes.item}>
            <img
              className={classes.itemImage}
              src={toothbrush}
              alt={"toothbrush"}
            ></img>
            <div className={classes.itemName}>Su&İçecek</div>
          </div>
          <div className={classes.item}>
            <img className={classes.itemImage} src={cloth} alt={"cloth"}></img>
            <div className={classes.itemName}>Yeni Ürünler</div>
          </div>
          <div className={classes.item}>
            <img
              className={classes.itemImage}
              src={coffee}
              alt={"coffee"}
            ></img>
            <div className={classes.itemName}>Yeni Ürünler</div>
          </div>
          <div className={classes.item}>
            <img
              className={classes.itemImage}
              src={tomato}
              alt={"tomato"}
            ></img>
            <div className={classes.itemName}>İndirimler</div>
          </div>
          <div className={classes.item}>
            <img
              className={classes.itemImage}
              src={toothbrush}
              alt={"toothbrush"}
            ></img>
            <div className={classes.itemName}>Su&İçecek</div>
          </div>
          <div className={classes.item}>
            <img className={classes.itemImage} src={cloth} alt={"cloth"}></img>
            <div className={classes.itemName}>Yeni Ürünler</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
