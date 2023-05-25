import React from "react";
import "./productcard.css";

function ProductCard(props){
    // const {
    //     dispatch,
    // } = CartState();
    // function handleClick(){
    //     dispatch({type: "ADD_TO_CART", payload: props});
    //     console.log("added");
    // }

    return(
        <div class="product-card" >
                <img className="card-img-top" src={props.image} alt="..."/>
            <div class="card-body">
                <div className="product-name">{props.name}</div>
                <div className="product-review">{props.review}</div>
                <div className="product-price">{props.price}</div> 
                <div className="add-to-cart-box"><button className="add-to-cart">Add To Cart</button></div>
            </div>
        </div>
    )
}

export default ProductCard;
