import { Navigate } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import SearchCar from "../pages/SearchCar/SearchCar";
import SearchResult from "../pages/SearchResult/SearchResult";
import DetailResult from "../pages/CarDetail/CarDetail";

const routes = [
  {
    path: " ",
    element: <Navigate to="/landing" />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/search-car",
    element: <SearchCar />,
  },
  {
    path: "/search-car-result",
    element: <SearchResult />,
  },
  {
    path: "/car-detail/:id",
    element: <DetailResult />,
  },
];

export { routes };
