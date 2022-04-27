import React from 'react';

const Item = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-tumb">
                <img src={`../..${product.picture}`} alt="" />
            </div>
            <div className="product-details">
                <h4><a href="#">{product.name}</a></h4>
                <p>{product.about}</p>
                <div className="product-bottom-details">
                    <div className="product-price"><small>$290.00</small>{product.price}</div>
                    <div className="product-links">
                        <a href="">
                        <img src="https://img.icons8.com/small/24/000000/like--v1.png"/>
                        </a>
                        <a href="">
                        <img src="https://img.icons8.com/small/24/000000/buy.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;