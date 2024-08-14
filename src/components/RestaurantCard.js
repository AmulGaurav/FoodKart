import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const navigate = useNavigate();
  const { cloudinaryImageId, id, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div
      className="res-card"
      onClick={() => {
        navigate("/restaurants/" + id);
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>38 minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
