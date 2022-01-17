import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import sprite from "../../sourses/icons/productsSprite.svg";

const IconComponent = ({ icon = "#icon-mobile-devices", color = false }) => {
  return (
    <svg className={classNames(styles.icon, {
      [styles.cart]: color
    })}>
      <use href={sprite + icon} />
    </svg>
  );
};

export default IconComponent;

