import useResMenu from "../utils/useResMenu";
import Shimmer from "./Shimmer";
import { useParams, Link } from "react-router-dom";
import ResCategory from "./ResCategory";
import { useState } from "react"

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useResMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      {
        <div className="text-center">
          <h1 className="font-bold mt-6 mb-2 text-3xl">{name}</h1>
          <p className="text-lg text-gray-500">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
          {categories.map((category, index) => (
            <ResCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>setShowIndex(index === showIndex ? null : index)}
            />
          ))}
        </div>
      }
    </>
  );
};

export default ResMenu;
