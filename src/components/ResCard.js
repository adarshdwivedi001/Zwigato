import React from "react";
import { CDN_URL } from "../utils/constants";

const ResCard = ({resData}) => {
    const {cloudinaryImageId,
           name,
           cuisines,
           avgRating,
           sla,
        }=resData?.info;
    return(
        <div className="res-card">
            <img 
              className="res-logo"
              alt="food"
              src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default ResCard; 