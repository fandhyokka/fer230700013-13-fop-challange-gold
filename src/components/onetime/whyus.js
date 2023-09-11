import React from "react";
import { IoThumbsUpOutline, IoPricetagOutline, IoTimeOutline, IoRibbonOutline } from "react-icons/io5";

const WhyUs = () => {
  return (
    <section>
      <div className="container" id="why-us-id">
        <div className="text-lg-start text-center mt-5">
          <h3>Why Us</h3>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row why-us-container">
          <div className="col-xs-12 col-md-6 col-lg-3 mb-3">
            <div className="why-us-card px-4 py-4 border rounded">
              <span className="bg-thumbs-up">
                <IoThumbsUpOutline className="why-us-icon" />
              </span>
              <h6 className="mt-3 fw-bold">Mobil Lengkap</h6>
              <p className="why-us-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 mb-3">
            <div className="why-us-card px-4 py-4 border rounded">
              <span className="bg-pricetag">
                <IoPricetagOutline />
              </span>
              <h6 className="mt-3 fw-bold">Harga Murah</h6>
              <p className="why-us-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 mb-3">
            <div className="why-us-card px-4 py-4 border rounded">
              <span className="bg-time">
                <IoTimeOutline />
              </span>
              <h6 className="mt-3 fw-bold">Layanan 24 Jam</h6>
              <p className="why-us-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 mb-3">
            <div className="why-us-card end-of-why-us px-4 py-4 border rounded">
              <span className="bg-ribbon">
                <IoRibbonOutline />
              </span>
              <h6 className="mt-3 fw-bold">Sopir Profesional</h6>
              <p className="why-us-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
