import React from "react";
import { useNavigate } from "react-router-dom";

const ActionBanner = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="action-set-background col container mt-4">
        <div className="action-container text-center rounded">
          <h3 className="action-font">Sewa Mobil di Bandung Sekarang!</h3>
          <p className="action-font">
            Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor
          </p>
          <button className="btn btn-success" onClick={() => navigate("/search-car")}>
            Mulai Sewa Mobil
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionBanner;
