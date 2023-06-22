import React from "react";
import style from "./shimmer.module.css";
import { foodQuotes } from "../../utils/constants";
import { foodQuotesUrl } from "../../utils/constants";

const Shimmer = () => {
  return (
    <>
    <div>{foodQuotes[ Math.floor(Math.random() * 10) + 1]}</div>
    <img src={foodQuotesUrl[ Math.floor(Math.random() * 20) + 1]} width={150} height={150} alt="Loading" className={style.foodQuotesImage}/>
    <div className={style["shimmer-container"]}>
     
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
      <div className={style["shimmer-card"]}>
        <div className={style["shimmer-image"]}></div>
        <div className={style["shimmer-item"]}></div>
        <div className={style["shimmer-cousines"]}></div>
        <div className={style["shimmer-price"]}></div>
      </div>
    </div>
    </>
  );
};

export default Shimmer;
