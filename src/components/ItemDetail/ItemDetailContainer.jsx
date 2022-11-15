import { useState, useEffect } from "react";
import { SingleItem } from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    console.log(
        "🚀 ~ file: ItemDetailContainer.jsx ~ line 8 ~ ItemDetailContainer ~ product",
        product
    );

    /* const paramsUrl = useParams();
  const id = paramsUrl.id; */
    const { idItem } = useParams();
    console.log(idItem);

    async function getItemsAsync() {
        let respuesta = await SingleItem(idItem);
        setProduct(respuesta);
    }

    useEffect(() => {
        getItemsAsync();
    }, [idItem]);

    return <ItemDetail product={product} />;
}
export default ItemDetailContainer;