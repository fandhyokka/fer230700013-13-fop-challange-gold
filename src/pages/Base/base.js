import { Outlet } from "react-router-dom";

import MyNavbar from "../../components/reusable/navbar";
import HeroSection from "../../components/reusable/header";
import Footer from "../../components/reusable/footer";

const Base = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Base;
