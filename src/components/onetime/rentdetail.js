import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { handler } from "../../api/handler";

function RentCarDetail(props) {
  const { id } = props;
  const [car, setCar] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await handler.get(`/customer/car/${id}`);
        setCar(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <section className="container rent-detail-container rounded">
      <div className="row justify-content-start">
        <div className="col-md-6 car-detail-left py-2 border rounded">
          <h6 className="fw-bold">Tentang Paket</h6>
          <div className="include">
            <p className="fw-bold">Include</p>
            <ul>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
          </div>
          <div className="exclude">
            <p className="fw-bold">Exclude</p>
            <ul>
              <li>Tidak termasuk biaya makan supir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada biaya tambahan Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Refund, Reschedule, Overtime Policies</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Tidak termasuk biaya makan supir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada biaya tambahan Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="col-md-6 car-detail-right">
          <div className="card card-detail-sewa">
            <img id="car-image" src={car.image} alt="Car" />
            <h6 id="car-name">{car.name}</h6>
            <p id="car-capacity">{car.category}</p>
            <div className="price-total-formater">
              <p>Total</p>
              <p id="car-total">Rp {car.price}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RentCarDetail;
