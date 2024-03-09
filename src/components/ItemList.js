import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {Math.floor(item.card.info.price / 100) ||
                  Math.floor(item.card.info.defaultPrice / 100)}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute mt-">
              <button className="p-2 px-8 bg-white shadow-md mt-28 ml-14 rounded-sm font-bold text-xs text-green-500 hover:shadow-xl ">
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-32 rounded-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
