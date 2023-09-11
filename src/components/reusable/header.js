import React from "react";
import GambarHeader from "../../images/header.png";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

const HeroSection = ({ showButton = true, showImage = true, showSentence = true }) => {
  const navigate = useNavigate();

  return (
    <section className="hero-set-background pt-4">
      <div className="container d-flex flex-lg-row flex-column align-items-center">
        <div className="col-xl-6">
          {showSentence && (
            <h1 className="text-start">
              Sewa & Rental Mobil Terbaik di
              <p>Bandung</p>
            </h1>
          )}

          {showSentence && <p className="d-md-flex flex-column">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>}

          {showButton && (
            <button type="button" className="btn btn-success btn-mulai" onClick={() => navigate("/search-car")}>
              Mulai Sewa Mobil
            </button>
          )}
        </div>
        {showImage && <img className="header-image" src={`${process.env.PUBLIC_URL}/images/header.png`} alt="header-logo" />}
      </div>
    </section>
  );
};

export default HeroSection;
