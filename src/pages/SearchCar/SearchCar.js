import MyNavbar from "../../components/reusable/navbar";
import HeroSection from "../../components/reusable/header";
import SearchCarSection from "../../components/onetime/search";
import Footer from "../../components/reusable/footer";

const SearchCar = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection showButton={false} />
      <SearchCarSection />
      <Footer />
    </>
  );
};

export default SearchCar;
