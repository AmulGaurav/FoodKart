import { createContext } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  loggedInUser: "Default User",
});

export default UserContext;
