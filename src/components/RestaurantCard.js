import { restaurants } from "../data/restaurantData";

const RestaurantCard = ({ resData }) => {
  const randomIndex = Math.floor(Math.random() * 8);
  const { cuisines, avgRating, costForTwo, slaString } =
    restaurants[randomIndex];

  return (
    <div className="p-4 w-[250px] h-[450px] bg-gray-100 rounded-lg">
      <img
        className="w-full h-[200px] rounded-lg"
        alt="res-logo"
        src={resData.strMealThumb}
      />
      <h3 className="py-2 font-bold text-lg">{resData.strMeal}</h3>
      <h4>{cuisines.slice(0, 5).join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>38 minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

// High Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2 py-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
