import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      .itemCards;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      const categoryType = c?.card?.card?.["@type"];
      return (
        categoryType ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        categoryType ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    });

  // console.log(categories);
  // console.log(itemCards);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
