import { useState } from "react";
import { useNavigate } from "react-router";
import MyNavbar from "../../components/reusable/navbar";
import HeroSection from "../../components/reusable/header";
import ServiceSection from "../../components/onetime/ourservice";
import WhyUs from "../../components/onetime/whyus";
import FaqSection from "../../components/onetime/faq";
import Footer from "../../components/reusable/footer";
import ActionBanner from "../../components/onetime/action";
import TestimonialCarousel from "../../components/onetime/testimonial";
import { useEffect } from "react";
import { loginAdmin } from "../../api";
const LandingPage = () => {
  useEffect(() => {
    const getToken = async () => {
      try {
        const login = await loginAdmin({
          email: "admin@bcr.io",
          password: "123456",
        });

        localStorage.setItem("token", login.data.access_token);

        console.log(localStorage.getItem("token"));
      } catch (err) {
        console.log(err);
      }
    };
    getToken();
  }, []);

  return (
    <>
      <MyNavbar />
      <HeroSection />
      <ServiceSection />
      <WhyUs />

      <TestimonialCarousel />

      <ActionBanner />
      <FaqSection />

      <Footer />
    </>
  );
};
export default LandingPage;
