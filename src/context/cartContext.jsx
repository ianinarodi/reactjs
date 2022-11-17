import {createContext, useState} from "react";

export const cartContext = createContext();

export function CartContextProvider({children}){
    const saludoContext ="Hola desde Brainlingual! :) ";
    const [cart, setCart] = useState([]);
    
    function addToCart (product, count){
        let itemAlreadyInCart =cart.findIndex(
            (itemsInCart) => itemsInCart.id === product.id
        );
 /*let newCart = cart.map(item => item)*/
 //opcion 1
 let newCart = [...cart];

 if (itemAlreadyInCart !== -1){
    newCart[itemAlreadyInCart].count += count;
    setCart(newCart);
 } else {
product.count = count;
newCart.push(product)
setCart(newCart)
    }
 }
 
 // opcion 2:  newCart.push(...product, count) OTRA FORMA DE USAR EL SPREAD PERO CON SUGAR SINTAX
 

/*function clear(){

}

function removeItem(idRemove){
cart.filter
}

function priceInCart (){

}

*/

function itemsInCart (){
   let total = 0;
    cart.forEach(itemsInCart => total = total + itemsInCart.count)
    return total;
}
    
return (
    <cartContext.Provider value={{cart,addToCart , itemsInCart, saludoContext }}>
        {children}
    </cartContext.Provider>
)

}