import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_API } from "../utils/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();

    //optional chaining
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check you Internet Connection</h1>
    );
  }

  // conditioanl randering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-100">
      <div className="filter flex">
        <div className="m-4 p-4  items-center">
          <input
            className="px-4 py-2 ml-20  rounded-xl"
            type="text"
            placeholder="Search all Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" px-4 py-2 bg-[#0071ce] text-white m-4 rounded-xl hover:scale-110 hover:bg-[#ffc220]  duration-300 "
            onClick={() => {
              const searchRes = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurants(searchRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 items-center">
          <button
            className="filter-btn px-4 py-2 bg-[#0071ce] text-white m-4 rounded-xl hover:scale-110 hover:bg-[#ffc220]  duration-300"
            onClick={() => {
              const ratedRes = restaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilterRestaurants(ratedRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterRestaurants.map((resto) => (
          <Link key={resto.info.id} to={"/restaurants/" + resto.info.id}>
            <ResCard resData={resto} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
