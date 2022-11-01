import React from "react";
import MyButton from "./MyButton";
import "./Item.css";

function Item(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgurl} alt={props.title} />
      </div>
      <div className="card-detail">
        <h3>{props.title}</h3>
        <p>${props.price}</p>
      </div>
      <MyButton color="pink">
        Ver más
      </MyButton>      
    </div>
  );
}

export default Item;