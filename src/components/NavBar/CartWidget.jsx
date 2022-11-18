<<<<<<< HEAD
import React, { useContext }  from "react";
=======
//1. importamos el hook de context: useContext
import React, { useContext } from "react";
//2. Importamos el context que queramos utilizar
import { cartContext } from "../../context/cartContext";
>>>>>>> master
import IconSVG from "./IconSVG";
import {cartContext} from "../../context/cartContext";

function CartWidget() {
<<<<<<< HEAD
  const miContext = useContext(cartContext);
  
  return (
   <>
    <IconSVG />
   <span style={{ color: "green"}}> {miContext.itemsInCart()} </span>
   </>
=======
  //3. Inicializamos el contexto deseado
  const miContext = useContext(cartContext);

  return (
    <>
      <IconSVG />
      <span style={{ color: "red" }}>{miContext.itemsInCart()}</span>
    </>
>>>>>>> master
  );
}

export default CartWidget;