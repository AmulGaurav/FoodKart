import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between h-[75px] bg-black text-white bg-opacity-85 shadow-lg px-2">
      <div className="logo-container ml-2 py-1 px-2 rounded-r-xl">
        <img className="w-48" src={logo} />
      </div>

      <div className="flex items-center m-4">
        <ul className="flex p-4 gap-8">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              btnText == "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
