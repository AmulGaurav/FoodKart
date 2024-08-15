import { useEffect, useState } from "react";
import { GITHUB_USER_API } from "./constants";

const useUserInfo = (username) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const data = await fetch(GITHUB_USER_API + username);
    const json = await data.json();

    setUserInfo(json);
  };

  return userInfo;
};

export default useUserInfo;
