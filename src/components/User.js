import useUserInfo from "../utils/useUserInfo";

const User = ({ username }) => {
  const userInfo = useUserInfo(username);

  return (
    <div className="flex flex-col items-center gap-4 m-4 p-4 bg-gray-100 w-1/3">
      <img className="w-52 rounded-full" src={userInfo.avatar_url} />
      <h2>Name: {userInfo.name}</h2>
      <h3>Location: {userInfo.location}</h3>
      <h4>Contact: @{userInfo.twitter_username}</h4>
    </div>
  );
};

export default User;
