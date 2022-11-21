import { useState, useEffect } from "react";
import { SingleItem } from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../data/data";

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const {idItem} =useParams ();
    

    useEffect (() => {
        getProduct (idItem).then(element => {
            setProduct(element)
        })
    }, [idItem]);

console.log(product)
return (
    <ItemDetail product={product} />
)
}

export default ItemDetailContainer;
    