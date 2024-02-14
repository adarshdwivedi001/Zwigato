import useResMenu from "../utils/useResMenu";
import Shimmer from "./Shimmer"
import { useParams, Link } from "react-router-dom"

const ResMenu = () => {

    const {resId} = useParams();

    const resInfo = useResMenu(resId);
    
    if(resInfo===null){
        return <Shimmer/>
    }

    const {name,
        cuisines,
        costForTwoMessage
    } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
    return(
    <>
        { 
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>{
                (!itemCards) ? <h1>Oops... No Items, <Link to="/">Back to Home </Link></h1> :
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