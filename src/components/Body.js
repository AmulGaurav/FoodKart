import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Aggarwal Sweets"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

export default Body;
