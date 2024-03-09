import React from "react";
import { CDN_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="m-4 p-4 w-[400px] h-[400px] rounded-xl hover:scale-95 hover:bg-gray-200 transition-transform">
      <img
        className=" rounded-xl w-[100%] h-[65%]"
        alt="food"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

//       ---  High Order Component  ---
//       ---  input -> ResCard -> ResCardDiscount  ---

export const withDiscountLabel = (ResCard) => {
  return (props) => {
    return (
      <div className="flex  transition-transform">
        <label className="absolute pt-[238px] px-[45px] text-white text-2xl font-extrabold align center">20% OFF UPTO ₹50</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
