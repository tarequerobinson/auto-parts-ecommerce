import ProductCard from "../Components/Product/ProductCard";
import AutoPartsData from "../TestData/AutoPartsData";
import "../Pages/Index.css";

const Index =()=> {


    return(


        <div className="index-container">
        <div className="new-products-wrapper">
            <h1>New Products</h1>

            <div className="new-products">
            {
                AutoPartsData.slice(0, 4).map((product, index)=>(
                    <ProductCard productCategory={product.productCategory} productName={product.productName} productImage={product.productImage} productPrice={product.productPrice}/>

                ))
            }
        </div>

        </div>


        <div className="new-products-wrapper">
            <h1>Top Selling</h1>

            <div className="new-products">
            {
                AutoPartsData.slice(0, 4).map((product, index)=>(
                    <ProductCard productCategory={product.productCategory} productName={product.productName} productImage={product.productImage} productPrice={product.productPrice}/>

                ))
            }
        </div>

        </div>


        <div className="footer">

            
        </div>

        

        
        
        </div>
    );
}

export default Index;