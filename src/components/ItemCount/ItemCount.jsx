import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <MyButton colorBtn="red" onTouchButton={handleSubstract}>
          -
        </MyButton>
        <span>{count}</span>
        <MyButton colorBtn="green" onTouchButton={handleAdd}>
          +
        </MyButton>
      </div>
      <div className="itemcount_btns">
        {}
        <MyButton onTouchButton={() => onAddToCart(count)}>
          Agregar al carrito
        </MyButton>
      </div>
    </div>
  );
}

export default ItemCount;

/*import React, {useState} from 'react';

const ItemCount = ({max}) => {

    const [contador, setContador] = useState(1)
    function modContador(operacion) {
        if(operacion === "+" && contador < max){
            setContador(contador + 1)
        }else{
            if(operacion === "-" && contador > 1){
                setContador(contador - 1)
            }
        }
    }
    return (
        <div className='d-flex col-sm-6'>
            <div className="btn btn-outline-dark mt-auto" onClick={() => modContador("-")}>{"<"}</div>
            <div className="form-control text-center mx-0" style={{maxWidth: '3rem'}}>
                {contador}
            </div>
            <div className="btn btn-outline-dark mt-auto" onClick={() => modContador("+")}>{">"}</div>
            <button className="btn btn-outline-dark flex-shrink-0 mx-3" type="button">
                <i className="bi-cart-fill me-1" />
                Agregar
            </button>
        </div>
    );
}

export default ItemCount;*/