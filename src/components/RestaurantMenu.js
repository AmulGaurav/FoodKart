import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { restaurants } from "../data/restaurantData";

const RestaurantMenu = () => {
  const { resName, resImg } = useParams();

  const randomIndex = Math.floor(Math.random() * 8);
  const { cuisines, costForTwo } = restaurants[randomIndex];

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{resName}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwo}
      </p>

      <div
        className={
          "w-7/12 sm:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto my-4 pt-5 pb-4 bg-gray-50 shadow-xl border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
        }
      >
        <ItemList resName={resName} resImg={resImg} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
