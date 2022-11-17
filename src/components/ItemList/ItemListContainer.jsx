import { useState, useEffect } from "react";
import Item from "./Item";
import getItems from "../../Services/mockService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getProducts, getProductsByCategory} from "../../data"


export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // si hay categorías
        if (categoryId) {
          setTimeout(() => {
    // llamamos a la función que filtra categorías y le pasamos el parámetro.
            getProductsByCategory(categoryId).then((products) => {
    // actualizamos el estado
              setProducts(products);
            });
          }, 2000);
        } 
    
    //si no hay categorías
    else {
    // llamamos a la función para objetener todos los productos.
          getProducts().then((products) => {
            setProducts(products);
          });
        }
      }, [categoryId]);

return (
  <div>
   <ItemList products={products}/>
  </div>
  )
}