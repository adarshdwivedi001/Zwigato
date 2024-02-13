import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { useParams, Link } from "react-router-dom"
import { MENU_API } from "../utils/constants";

const ResMenu = () => {

    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    fetchMenu = async() => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json?.data);
    }
    
    if(resInfo===null){
        return <Shimmer/>
    }

    const {name,
        cuisines,
        costForTwoMessage
    } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

   
    return(
    <>
        { 
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>{
                (!itemCards) ? <h1>Oops... No Items, <Link to="/">Click me</Link></h1> :
                itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {"₹"} {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}
                    </li>
                ))}
            </ul>
        </div>
       }         
  </>
    )
}

export default ResMenu; 