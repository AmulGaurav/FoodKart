import useUserInfo from "../utils/useUserInfo";

const User = ({ username }) => {
  const userInfo = useUserInfo(username);

  return (
    <div className="user-card">
      <img className="user-img" src={userInfo.avatar_url} />
      <h2>Name: {userInfo.name}</h2>
      <h3>Location: {userInfo.location}</h3>
      <h4>Contact: @{userInfo.twitter_username}</h4>
    </div>
  );
};

export default User;
