const RestaurantCard = ({ resName, cuisine }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/5e904b0f43f2c46f0a3923985053b2a2"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurantCard;
