import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ title, price, category, description, imgurl, id }) {
  const urlDetail = `/detail/${id}`;
  return (
    <div className="card">
      <ToggleButton icon="👩‍🎓" />
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card_detail">
        <h3>{title}</h3>
        <h4 className="priceTag">$ {price}</h4>
      </div>

      <Link to={urlDetail}>
        <MyButton onTouchButton={() => console.log("click")} color="black">
          Ver más
        </MyButton>
      </Link>
    </div>
  );
}

export default Item; 
