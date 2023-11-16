import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from "./Components/SearchBar/SearchBar";
import ProductCard from './Components/Product/ProductCard';
// import AutoPartsData from "C:/Users/TAREQUE ROBINSON/Documents/React js Projects/auto-parts-ecommerce/src/TestData/MarketPlaceData.js";
import Index from "./Pages/Index";
import SignUp from './Pages/SignUp';
// import {BrowserRouter as Router, Routes , Route} from "react-router-dom";




function App() {
  return (

    <>

{/* <Router>
  <Routes>
    <Route path= "/SignUp"  element = {<SignUp/>} />
  </Routes>
</Router>
 */}

    
    
    <NavBar/>
    <Index/>

    {/* <SignUp/> */}
    </>
  );
}

export default App;
