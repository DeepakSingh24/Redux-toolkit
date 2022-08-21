import React from "react";
import logo from "../../logo.svg";
import styles from "./canvas.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectColor, changeColor } from "./canvasSlice";
const Color = () => {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);
  return (
    <div className={styles.wrapper}>
      Color
      <div className={styles.image__circle} style={{ backgroundColor: color }}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className={styles.btn__wrapper}>
        <button onClick={() => dispatch(changeColor("#fff"))}>White</button>
        <button onClick={() => dispatch(changeColor("#ff6633"))}>Orange</button>
        <button onClick={() => dispatch(changeColor("pink"))}>Pink</button>
        <button onClick={() => dispatch(changeColor("yellow"))}>Yellow</button>
      </div>
    </div>
  );
};

export default Color;
