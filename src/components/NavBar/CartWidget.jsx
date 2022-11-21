import React, { useContext }  from "react";
import IconSVG from "./IconSVG";
import {cartContext} from "../../context/cartContext";

function CartWidget() {
  const miContext = useContext(cartContext);
  
  return (
   <>
    <IconSVG />
   <span style={{ color: "green"}}> {miContext.itemsInCart()} </span>
   </>
  );
}

export default CartWidget;