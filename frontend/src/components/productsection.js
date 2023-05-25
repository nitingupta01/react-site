import React from "react";
import ProductCard from "./productcard";
import ProductInfo from "./productsinfo";
import "./productsection.css";

function ProductSection(){    

    function CreateCard(product){
        return(
            <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                review={product.review}
                price={product.price}
            />
        )
    }

    return(
        <div>
            <div className="product-section container">
                {ProductInfo.map(CreateCard)}
            </div>
        </div>
    )
}

export default ProductSection;