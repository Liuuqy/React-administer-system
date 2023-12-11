import About from "@/views/About";
import { lazy } from "react";
import React from "react";
import Tom from "@/views/User/Tom";
import Bill from "@/views/User/Bill";
import Alex from "@/views/User/Alex";
import Fontpage from "@/views/Fontpage";
// import React from "react";
// eslint-disable-next-line react-refresh/only-export-components
const Home = lazy(() => import("@/views/Home/index.jsx"));
// eslint-disable-next-line react-refresh/only-export-components
const User = lazy(() => import("@/views/User/User.jsx"));
const withLoadingComponent = (Comps) => {
  return (
    <React.Suspense callback={<div>Loading</div>}>
      <Comps></Comps>
    </React.Suspense>
  );
};
const routes = [
  {
    path: "/",
    element: <Fontpage />,
    children: [
      {
        path: "/option1",
        element: withLoadingComponent(Home),
      },
      {
        path: "/option2",
        element: <About></About>,
        // children: [
        //   {
        //     path: "/user",
        //     element: withLoadingComponent(User),
        //   },
        // ],
      },
      {
        path: "/user",
        element: withLoadingComponent(User),
        children: [
          {
            path: "/user/tom",
            element: <Tom></Tom>,
          },
          {
            path: "/user/bill",
            element: <Bill></Bill>,
          },
          {
            path: "/user/Alex",
            element: <Alex />,
          },
        ],
      },
    ],
  },
];
export default routes;
