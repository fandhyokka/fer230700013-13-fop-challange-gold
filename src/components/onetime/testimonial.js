import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { IoIosStar, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GambarIrene from "../../images/irene.png";
import GambarWendy from "../../images/wendy.png";
import GambarJoy from "../../images/joy.png";

const TestimonialCarousel = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [testimonialData, setTestimonialData] = useState([
    {
      image: `${process.env.PUBLIC_URL}/images/irene.png`,
      rating: 5,
      comment: "Puas dengan pelayanannya. Mobilnya tidak ada kerusakan dan tidak mogok di jalan",
      info: "Irene, 22nd, South Korea",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/wendy.png`,
      rating: 5,
      comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium ullam, ab explicabo tenetur earum impedit. Provident tenetur veniam aliquam!.",
      info: "Wendy, 23rd, Kopo Sayati",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/joy.png`,
      rating: 5,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam architecto optio vel consequuntur. Animi iusto suscipit sit ratione iure neque dolorum consectetur debitis ullam..",
      info: "Joy, 27th, Cijerah",
    },
  ]);

  const moveItem = () => {
    const temp = testimonialData;
    temp.push(temp.shift());
    console.log(temp);
    setTestimonialData([...temp]);
  };

  return (
    <div className="testimonial-main-container container-fluid mt-5" id="testimonial-id">
      <div className="text-container d-flex flex-column">
        <h4 className="text-center fw-bold">Testimonial</h4>
        <p className="text-center fw-bold">Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div className="testimonial-container">
        {testimonialData &&
          testimonialData.map((item, index) => (
            <div key={`item-${index + 1}`} className="carousel-card">
              <div className="carousel-content">
                <img className="image-thumbnail-testimonial" src={item.image} alt="" />
                <div className="testimonial-details">
                  <div className="testimonial-info">
                    <div className="carousel-ratting">
                      {[...Array(item.rating)].map((rate, index) => (
                        <IoIosStar key={`rates-${index + 1}`} />
                      ))}
                    </div>
                    <h6>{item.comment}</h6>
                    <p>{item.info}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="testimonial-button-wrapper">
        <div onClick={() => moveItem()} className="testimonial-button arrow-back">
          <IoIosArrowBack />
        </div>
        <div onClick={() => moveItem()} className="testimonial-button arrow-forward">
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
