import { useState, useEffect } from "react";
import Item from "./Item";
import getItems from "../../Services/mockService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  /*async function getItemsAsync() {
    let respuesta = await getItems(categoryId);
    setProducts(respuesta);
  }*/

  useEffect(() => {
    getItems(categoryId).then((res) => {
      setProducts(res);
    });
    return () => {
      console.log("Componente desmontado");
    };
  }, [categoryId]);

   /*return (
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
*/

return <ItemList products={products}/>}


      