import React from 'react';
// import { useNavigate } from 'react-router-dom';
import "../Product/ProductCardStyle.css";
import * as FaIcons from "react-icons/fa";



const ProductCard =({productCategory, productName,  productImage, productDescription , productPrice, productId})=> {
    // const navigate = useNavigate();
    const handleSongItemClick =()=> {
        // Navigate to the item's detail page when clicked, using the item's ID which  is songtitle in this case
        // navigate(`/productDetails/${productId}`);
      };
    
return (
    <>
        <div className="productContainer" onClick={handleSongItemClick}>
            <div className='productImageContainer'>
                <img src={productImage} alt="productImage" id='productImage'/>
            </div>
                <p className='productCategory'>{productCategory}</p>
                <h3 className='productName'>{productName}</h3>
                <h3 className='productPrice'>{productPrice}</h3>
                <p className='productDescription'>{productDescription}</p>
        
        
        <div className='productOptions'>
            <div className="icon">
                <FaIcons.FaHeart/>
            </div>
            <div className="icon">
                <FaIcons.FaEye/>
            </div>
            <div className="icon">

            <FaIcons.FaShoppingCart/>
            </div>



        </div>
            
        </div>
    </>
)


}

export default ProductCard;