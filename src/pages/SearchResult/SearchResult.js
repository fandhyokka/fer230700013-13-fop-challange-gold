import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import MyNavbarSecond from "../../components/reusable/navbar-v2";
import SearchCarSection from "../../components/onetime/search";
import CardCarResult from "../../components/onetime/card-car-result";
import Footer from "../../components/reusable/footer";
import { getCars } from "../../api";

const SearchResult = () => {
  const location = useLocation();

  const searchParams = useMemo(() => {
    return Object.fromEntries(new URLSearchParams(location.search));
  }, [location.search]);
  console.log(searchParams);

  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await getCars(searchParams);
        console.log(response.data.cars);
        setCars(response.data.cars);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCarData();
  }, [searchParams]);

  return (
    <>
      <MyNavbarSecond />
      <SearchCarSection />
      <div className="">
        <div className="container hasil-pencarian-mobil d-flex flex-row">{cars && cars.map((car) => <CardCarResult key={car.id} name={car.name} id={car.id} image={car.image} price={car.price} />)}</div>
      </div>

      <Footer />
    </>
  );
};

export default SearchResult;
