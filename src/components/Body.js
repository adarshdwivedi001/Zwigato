import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { Shimmer } from "./Shimmer";

const Body = () => {

    const [restaurants,setRestaurants] = useState([]);
    const [filterRestaurants,setFilterRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        //optional chaining
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // conditioanl randering
    return restaurants.length ===0 ? <Shimmer/> : (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input
                 className="search-box"
                 type="text"
                 placeholder="Search all Restaurants"
                 value={searchText}
                 onChange={(e) => {
                    setSearchText(e.target.value)
                 }}
                />
                <button onClick={() => {
                    const searchRes = restaurants.filter(
                        (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilterRestaurants(searchRes)
                }}
                >Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
                const ratedRes=restaurants.filter(
                    (res)=>res.info.avgRating>4
                )
                setFilterRestaurants(ratedRes);
                }}
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
            {filterRestaurants.map((resto) => (
                <ResCard key={resto.info.id} resData={resto} />
            ))}
        </div>
    </div>
    )
}

export default Body;