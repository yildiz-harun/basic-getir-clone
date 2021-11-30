import React from "react";
import classes from "./Campaigns.module.css";
import coffee from "../../img/coffee.jpg";
import tomato from "../../img/tomato.jpg";

function Campaigns() {
  return (
    <div className={classes.Campaigns}>
      <div className={classes.container}>
        <div className={classes.header}>Kampanyalar</div>
        <div className={classes.campaignItems}>
          <div className={classes.campaignItem}>
            <img className={classes.campaignImage} src={coffee} alt={"coffee"} />
          </div>
          <div className={classes.campaignItem}>
            <img className={classes.campaignImage} src={tomato} alt={"tomato"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
