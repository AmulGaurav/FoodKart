import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/Contexts";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState({
    isLoggedIn: false,
    loggedInUser: "Default User",
  });

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: userInfo.isLoggedIn,
        loggedInUser: userInfo.loggedInUser,
        setUserInfo,
      }}
    >
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// defining root of react
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing the react element inside the root
root.render(<RouterProvider router={appRouter} />);
