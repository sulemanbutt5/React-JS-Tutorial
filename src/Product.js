import React from "react"
function Product(props)
{
    return(
        <div>
            <h2>
                {props.product.name}
            </h2>
            <p>
                ${props.product.price} - {props.product.desc}
            </p>
        </div>

    )
}

export default Product