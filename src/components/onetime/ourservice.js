import React from "react";
import { IoCheckmark } from "react-icons/io5";
import GambarService from "../../images/service.png";
import { useNavigate } from "react-router-dom";

const ServiceSection = () => {
  return (
    <section className="service-section-container container-fluid mt-5 bg-white" id="our-service-id">
      <div className="service-section-wrapper container d-md-flex flex-md-row flex-column align-items">
        <div className="col-sm text-center mb-3">
          <img className="service-image img-fluid" src={`${process.env.PUBLIC_URL}/images/service.png`} alt="service-logo" />
        </div>
        <div className="col-sm text-center text-md-start d-md-flex flex-md-column align-self-center justify-content-sm-start">
          <h3 className="text-start">Best Car Rental for any kind of trip in Bandung!</h3>
          <p className="text-start">
            Sewa mobil di Bandung bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting dll.
          </p>
          <div className="icon-container text-start d-flex flex-column gap-3">
            <div className="wrapper-check-icon">
              <div className="check-icon">
                <IoCheckmark />
              </div>
              <span className="ms-2">Sewa Mobil Dengan Supir di Bandung 12 jam</span>
            </div>

            <div className="wrapper-check-icon">
              <div className="check-icon">
                <IoCheckmark />
              </div>
              <span className="ms-2">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
            </div>
            <div className="wrapper-check-icon">
              <div className="check-icon">
                <IoCheckmark />
              </div>
              <span className="ms-2">Sewa Mobil Jangka Panjang Bulanan</span>
            </div>
            <div className="wrapper-check-icon">
              <div className="check-icon">
                <IoCheckmark />
              </div>
              <span className="ms-2">Gratis Antar - Jemput Mobil di Bandara</span>
            </div>
            <div className="wrapper-check-icon">
              <div className="check-icon">
                <IoCheckmark />
              </div>
              <span className="ms-2">Layanan Airport Transfer / Drop In Out</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
