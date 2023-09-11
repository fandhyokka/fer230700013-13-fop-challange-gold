import React from "react";
import { useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const CardCarResult = (props) => {
  const { name, price, image, id } = props;

  const changeCurrency = (value) => {
    return value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/car-detail/${id}`);
  };

  return (
    <Container style={{ width: "176px" }}>
      <Row className="d-flex">
        <Col className="col-lg-12">
          <div className="card" style={{ width: "auto" }}>
            <div className="card-container border rounded">
              <img className="card-img-top" src={image} alt="car-image" />
              <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Price: {changeCurrency(price)}</p>
                <button className="btn btn-success" style={{ width: "100%" }} onClick={handleClick}>
                  Pilih Mobil
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      ;
    </Container>
  );
};

export default CardCarResult;
