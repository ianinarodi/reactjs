import "./itemdetail.css";
import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";


export default function ItemDetail({ product }) {
  const {addToCart} = useContext(cartContext)
  function onAddToCart(count){
    alert(`Agregaste ${count} items al carrito!`);
    addToCart(product, count)
  }

    let { id, thumbnail, body, title, price, stock } = product;
    return (
        <div className='row gx-4 gx-lg-5 align-items-center'>
            <div className='col-md-6'>
                <img
                    className='card-img-top mb-5 mb-md-0'
                    src={thumbnail}
                    alt={title}
                />
            </div>
            <div className='col-md-6'>
                <div className='small mb-1'>{id}</div>
                <h1 className='display-5 fw-bolder'>{title}</h1>
                <div className='fs-5 mb-5'>
                    <span className='text-decoration-line-through'>
                        ${price}
                    </span>
                </div>
                <p className='lead'>{body}</p>
                <div className='d-flex'>
                    <ItemCount max={ stock} onAddToCart={onAddToCart} />  
                </div>
            </div>
        </div>
    );
}


