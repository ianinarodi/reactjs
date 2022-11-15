import "./itemdetail.css";
import React from "react";
import ItemCount from "./ItemCount";


export default function ItemDetail({ product }) {
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
                    <ItemCount max={stock} />
                </div>
            </div>
        </div>
    );
}


/*function ItemDetail({ product }) {
  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito!`);
    setState(count) 
  }

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.body}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <ItemCount 
        onAddToCart={onAddToCart} 
        stock={product.stock} 
      />
      {ItemCount( {onAddToCart, stock}) }
    </div>
  );
}

export default ItemDetail; */