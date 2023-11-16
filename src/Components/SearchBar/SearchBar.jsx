import "../SearchBar/SearchBarStyle.css";
import * as FaIcons6 from "react-icons/fa6";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
// import SongHorizontalTile from "../Components/SongHorizontalTile"



const SearchBar=({placeholder , data })=> {

    const [filteredData, setFilteredData] = useState([]);
    // const [searchResultsVisible , setSearchResultsVisible] = useState([false]);
    
    const filterData=(searchQuery)=>{

        if (searchQuery === "") {
            setFilteredData([]);
        }

        else {
        setFilteredData (data.filter((dataItem) =>
        dataItem.songTitle.toLowerCase().includes(searchQuery.toLowerCase()) || dataItem.artiste.toLowerCase().includes(searchQuery.toLowerCase())
        ));
        // setSearchResultsVisible(searchQuery===null);
        }

    }


return(
     <div className="search"> 
            <div  className="searchbar" >
                <input type="text" placeholder={placeholder}
                    onChange={(e) =>filterData(e.target.value)}
                />
                <button className="search-button">Search</button> 
                {/* <FaIcons.FaSearch/>  */}
                {/* <div className="search-button">Search</div> */}

            </div>
            {/* <div className="search-button">Search</div> */}

            { filteredData.length !== 0 && (
            <div className="searchresults">
                {filteredData.map((item , index ) =>{
                return( 
                    <div className="dataItem">
                    <FaIcons.FaSearch/>
                    {/* <SongHorizontalTile songtitle={item.songTitle} songDescription={item.songDescription} artiste={item.artiste} coverArtUrl={item.coverArtUrl}/> */}

                    </div>
                );
            })}
            </div>
            )
}

    
    
     </div> 
)


}

export default SearchBar;