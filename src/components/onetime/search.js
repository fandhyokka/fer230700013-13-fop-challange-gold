import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { getCars } from "../../api";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";

const SearchCarSection = ({ showPencarian = true }) => {
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({});
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState(false);
  const [price, setPrice] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [kategori, setKategori] = useState("");
  const [maxPrice, setMaxPrice] = useState(9999999999);

  const handleInputChange = (event) => {
    setName(event.target.value.toLowerCase());
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangePrice = (event) => {
    if (event.target.value === "<400000") {
      setMinPrice(0);
      setMaxPrice(399999);
    } else if (event.target.value === "400000-600000") {
      setMinPrice(400000);
      setMaxPrice(599999);
    } else if (event.target.value === ">600000") {
      setMinPrice(600000);
      setMaxPrice(9999999999);
    } else if (event.target.value === "0") {
      setMinPrice(0);
      setMaxPrice(9999999999);
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  const handleSearch = async () => {
    navigate({
      pathname: "/search-car-result",
      search: createSearchParams({
        name: name,
        category: category,
        minPrice: minPrice,
        maxPrice: maxPrice,
      }).toString(),
    });
  };

  return (
    <section className="container search-car-container rounded">
      <div className="search-wrapper d-flex flex-md-column">
        <div className="col col-sm car-name-wrapper">
          <p>Nama Mobil</p>
          <div className="search-car-input-wrapper">
            <Form.Control type="text" name="carName" placeholder="Masukkan Nama Mobil" value={formData.carName} onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <div className="dropdown-wrapper">
        <div className="kategoridropdown">
          <p>Kategori</p>
          <div>
            <select className="form-select" aria-label="Default select example" defaultValue="" onChange={handleChangeCategory}>
              <option selected value="">
                Masukan Kapasitas Mobil
              </option>
              <option value="small">2 - 4 Orang</option>
              <option value="medium">4 - 6 Orang</option>
              <option value="large">6 - 8 Orang</option>
            </select>
          </div>
        </div>
        <div className="pricedropdown">
          <p>Harga</p>
          <div>
            <select className="form-select" aria-label="Default select example" defaultValue="" onChange={handleChangePrice}>
              <option selected value="">
                Pilih Harga
              </option>
              <option value="<400000">Rp 400.000</option>
              <option value="400000-600000">RP 400.000 - 600.000 </option>
              <option value=">600000">Rp 600.000</option>
            </select>
          </div>
        </div>
        <div className="Statusdropdown">
          <p>Status</p>
          <div>
            <select className="form-select" aria-label="Default select example" defaultValue="" onChange={handleChangePrice}>
              <option selected value="">
                Status
              </option>
              <option value="">Tersedia</option>
              <option value="">Disewa </option>
            </select>
          </div>
        </div>
      </div>
      <div className="button-wrapper ">
        <button className={location.pathname === "/search-car" ? "button-for-search-car" : "button-adjustment-setting-search-result btn btn-warning"} onClick={handleSearch} type="submit">
          {location.pathname === "/search-car" ? "Cari Mobil" : "Edit"}
        </button>
      </div>
    </section>
  );
};

export default SearchCarSection;
