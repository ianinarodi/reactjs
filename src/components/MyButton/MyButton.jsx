import "./mybutton.css";
import React, { useState } from "react";

function MyButton(props) {
  let [colorBtn, setColorBtn] = useState(props.colorBtn);

  function handleClick() {
    setColorBtn("#555");
    props.onTouchButton && props.onTouchButton();//esto estaba comentado,no se xq 
  }

  return (
    <button
      onClick={props.onTouchButton}
      style={{ backgroundColor: colorBtn, marginBotton: "10px" }}
      className="btn">
      {props.children}
    </button>
  );
}

export default MyButton;