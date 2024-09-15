import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OnlineStatus from "./OnlineStatus";
import { Menu, X } from "lucide-react";
import UserContext from "../utils/Contexts";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { isLoggedIn, loggedInUser } = useContext(UserContext);

  return (
    <nav className="bg-blue-50 shadow-md">
      <div className="max-w-full mx-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to={"/"}>
              <img className="h-8 w-auto brightness-0" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="lg:ml-20 flex items-baseline space-x-2 lg:space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <NavLink to="/cart">Cart</NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <OnlineStatus status={onlineStatus} />
            <LoginButton btnText={btnText} setBtnText={setBtnText} />
            <div className="font-medium">{isLoggedIn && loggedInUser}</div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" mobile>
              Home
            </NavLink>
            <NavLink to="/about" mobile>
              About Us
            </NavLink>
            <NavLink to="/contact" mobile>
              Contact Us
            </NavLink>
            <NavLink to="/cart" mobile>
              Cart
            </NavLink>
          </div>

          <div className="py-2 border-t border-gray-200">
            <div className="flex justify-between items-center px-5">
              <div className="flex items-center space-x-4">
                <LoginButton btnText={btnText} setBtnText={setBtnText} mobile />
                <div className="font-bold">{isLoggedIn && loggedInUser}</div>
              </div>
              <OnlineStatus status={onlineStatus} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ children, to, mobile }) => (
  <Link
    to={to}
    className={`${
      mobile ? "block text-base" : "text-gray-700 text-sm"
    } text-blue-800 px-3 py-2 font-extrabold hover:bg-blue-100 hover:text-blue-900 rounded-xl`}
  >
    {children}
  </Link>
);

const LoginButton = ({ btnText, setBtnText, mobile }) => {
  const { isLoggedIn, loggedInUser, setUserInfo } = useContext(UserContext);

  return (
    <button
      onClick={() => {
        setBtnText(btnText === "Login" ? "Logout" : "Login");
        setUserInfo({ isLoggedIn: !isLoggedIn, loggedInUser: loggedInUser });
      }}
      className={`${
        mobile ? "-ml-2 text-base" : "min-w-20 text-sm"
      } px-3 py-2 font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-lg`}
    >
      {btnText}
    </button>
  );
};

export default Header;
