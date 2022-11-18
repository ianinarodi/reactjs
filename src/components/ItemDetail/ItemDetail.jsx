import "./itemdetail.css";
<<<<<<< HEAD
import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
=======
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
>>>>>>> master
import { cartContext } from "../../context/cartContext";

function ItemDetail({ product }) {
  const { addToCart } = useContext(cartContext);

<<<<<<< HEAD
export default function ItemDetail({ product }) {
  const {addToCart} = useContext(cartContext)
  function onAddToCart(count){
    alert('Agregaste ${count} items al carrito!');
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
                    <ItemCount max={ stock} />
                </div>
            </div>
        </div>
    );
}


/*function ItemDetail({ product }) {
=======
>>>>>>> master
  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito!`);
    /* setState(count) */
    addToCart(product, count);
  }

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
    </div>
  );
}

export default ItemDetail;