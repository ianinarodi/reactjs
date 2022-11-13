import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ title, price, category, thumbnail, id }) {
  const urlDetail = `/detail/${id}`;
  return (
    <div className="col mb-5" key={id}>
      <div className="card h-100">
        <Link to="/detalle">
        </Link>
        <img className="card-img-top" src={thumbnail} alt={title} />        
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            ${price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link to={urlDetail} className="btn btn-outline-dark mt-3 px-4" id={id} href="#">Ver Producto</Link>
          </div>
        </div>
      </div>
    </div>
  )
}