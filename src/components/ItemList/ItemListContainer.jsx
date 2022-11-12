import { useState, useEffect } from "react";

import Item from "./Item";
import "./itemlist.css";
import getItems from "../../Services/mockService";

import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
    return () => {
      console.log("Componente desmontado");
    };
  }, [idCategory]);

  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
          key= {product.id}
          imgurl={product.thumbnail}
          title={product.title}
          price={product.price}
          category={product.category}
          description={product.body}
          color="pink"
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer; 
      