import "../NavBar/NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import AutoPartsData from "../../TestData/AutoPartsData.js";
// import  from
import * as FaIcons from "react-icons/fa";
import Logo from "../Assets/will j logo 2.png";
// auto-parts-ecommerce\src\Assets\will j logo 2.png


const NavBar =()=> {



    return (
<>
      <div className="navbar-wrapper">

        <nav className="navbar">

            <div className="navbar-top-container">
                <div className="navbar-top">
                    <p><span><FaIcons.FaPhone/></span> 8762027222</p>
                    <p><span><FaIcons.FaEnvelope/></span>tarequerobinson@gmail.com</p>
                    <p><span><FaIcons.FaLocationArrow/></span>  Kingston 12, Baltimore Ave</p>
                </div>
            </div>

            <div className="navbar-bottom">

                {/* <h1>AutoParts </h1> */}
                <div className="logo">
                    {/* <Logo/> */}
                 <img src="https://logos-world.net/wp-content/uploads/2022/04/Advance-Auto-Parts-Emblem.png" alt="Logo" />

                </div>
                {/* C:\Users\TAREQUE ROBINSON\Documents\React js Projects\auto-parts-ecommerce\src\Components\Assets\will j logo 2.png */}
                <SearchBar  data={AutoPartsData} placeholder={"Search car model, part number etc." }/>

                <div className="wishlist">
                    <FaIcons.FaHeart/>
                    <p>Wish List</p>
                </div>

                <div className="shopping-cart">
                    <FaIcons.FaShoppingCart/>
                    <p>Shopping Cart</p>
                </div>

            </div>

            

        </nav>


        <div className="nav-between-pages">
            <ul>
                <li>Home</li>
                <li>All Products</li>
                <li>About</li>
            </ul>

        </div>



        
        </div>

        </>
  
    );
}

export default NavBar;