import MyNavbarSecond from "../../components/reusable/navbar-v2";
import HeroSection from "../../components/reusable/header";
import SearchCarSection from "../../components/onetime/search";
import Footer from "../../components/reusable/footer";
import RentCarDetail from "../../components/onetime/rentdetail";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { getCarsById } from "../../api";
const DetailResult = () => {
  const { id } = useParams();
  const [detailOrder, setDetailOrder] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCarsById(id, {}); // Use getCarsById(id, {}) to make the API request
        setDetailOrder(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <MyNavbarSecond />
      <Container className="container-detail-order mb-3 rounded">
        <Row>
          <Col>
            <div>
              <p className="fw-bold">Pencarianmu</p>
            </div>

            <Form className="car-detail-page">
              <Form.Group controlId="input1" className="rounded-5 me-4">
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control type="text" placeholder="Ketik Nama/Tipe Mobil" value={detailOrder ? detailOrder.name : ""} disabled />
              </Form.Group>
              <Form.Group controlId="input2" className="rounded-5 me-4">
                <Form.Label>Kategori</Form.Label>
                <Form.Control type="text" placeholder="Ketik Nama/Tipe Mobil" value={detailOrder ? detailOrder.category : ""} disabled />
              </Form.Group>

              <Form.Group controlId="input3" className="rounded-5 me-4">
                <Form.Label>Harga</Form.Label>
                <Form.Control type="text" placeholder="Ketik Nama/Tipe Mobil" value={detailOrder ? detailOrder.price : ""} disabled />
              </Form.Group>

              <Form.Group controlId="input4" className="rounded-5">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder="Ketik Nama/Tipe Mobil" value={detailOrder ? (detailOrder.status ? "Available" : "Disewa") : ""} disabled />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

      <RentCarDetail id={id} />
      <Footer />
    </>
  );
};

export default DetailResult;
