import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    // const { id, title } = products[0];
    const renderList = products.map((product)=>{
        const {id, title, image, price, category} = product
        return(
            <div className="container col-md 4">
                <div className="container" key={id}>
                <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title">{title} </h2>
                    <h3>${price} </h3>
                    <h3> {category} </h3>

                    
                   
                </div>
                </div>
            </div>
            </div>
        )
    })
    return <>{renderList}</>
       
        
}

export default ProductComponent