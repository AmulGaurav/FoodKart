import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { RESTAURANTS_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    const restaurantsList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurantsList);
    setFilteredRestaurant(restaurantsList);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center lg:mx-10 mt-4 mb-8">
        <div className="px-4 my-1">
          <input
            type="text"
            className="border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-4 my-2 py-1 px-4 bg-green-300 hover:bg-green-200 cursor-pointer rounded-lg transition duration-300"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div className="px-4 my-1">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info?.avgRating >= 4
              );

              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.id % 4 ? (
              <RestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCardPromoted resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
