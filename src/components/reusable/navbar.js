import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { IoMenu, IoClose } from "react-icons/io5";
import { useLocation, Link } from "react-router-dom";

const MyNavbar = () => {
  const [sideNavbarActive, setSideNavbarActive] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const toggleSideNavbar = () => {
    setSideNavbarActive(!sideNavbarActive);
    setIsHamburgerActive(!isHamburgerActive);
  };

  const closeSideNavbar = () => {
    setSideNavbarActive(false);
    setIsHamburgerActive(false);
  };

  const location = useLocation();

  return (
    <>
      <Navbar className="navbar-set-background" expand="lg">
        <Container>
          <Navbar.Brand>
            <div className="company-logo"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSideNavbar}>
            {isHamburgerActive ? <IoClose /> : <IoMenu />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end navbar-margin-adjustment ${sideNavbarActive ? "active" : ""}`}>
            <Nav>
              <Nav.Link className="nav-link me-2" aria-current="page">
                {location.pathname === "/landing" ? (
                  <a href="#our-service-id" style={{ color: "black", textDecoration: "none" }}>
                    Our Service
                  </a>
                ) : (
                  <Link to="/landing" style={{ color: "black", textDecoration: "none" }}>
                    Our Service
                  </Link>
                )}
              </Nav.Link>
              <Nav.Link className="nav-link me-2" href="#why-us-id">
                {location.pathname === "/landing" ? (
                  <a href="#why-us-id" style={{ color: "black", textDecoration: "none" }}>
                    Why Us
                  </a>
                ) : (
                  <Link to="/landing" style={{ color: "black", textDecoration: "none" }}>
                    Why Us
                  </Link>
                )}
              </Nav.Link>
              <Nav.Link className="nav-link me-2" href="#testimonial-id">
                {location.pathname === "/landing" ? (
                  <a href="#testimonial-id" style={{ color: "black", textDecoration: "none" }}>
                    Testimonial
                  </a>
                ) : (
                  <Link to="/landing" style={{ color: "black", textDecoration: "none" }}>
                    Testimonial
                  </Link>
                )}
              </Nav.Link>
              <Nav.Link className="nav-link me-2" href="#faq-id">
                {location.pathname === "/landing" ? (
                  <a href="#faq-id" style={{ color: "black", textDecoration: "none" }}>
                    FAQ
                  </a>
                ) : (
                  <Link to="/landing" style={{ color: "black", textDecoration: "none" }}>
                    FAQ
                  </Link>
                )}
              </Nav.Link>
              <Nav.Link id="close-icon" className={`nav-link me-2 d-none ${sideNavbarActive ? "" : "d-none"}`} onClick={closeSideNavbar}>
                <IoClose />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={`side-navbar ${sideNavbarActive ? "active" : ""}`}>
        <div className="side-navbar-close" onClick={closeSideNavbar}>
          <IoClose />
        </div>
        <div className="side-navbar-content">
          <h5 id="BCR">BCR</h5>
          <Nav.Link className="nav-link me-2" aria-current="page">
            {location.pathname === "/landing" ? (
              <a href="#our-service-id" style={{ color: "black", textDecoration: "none" }}>
                Our Service
              </a>
            ) : (
              <Link to="/landing" style={{ color: "black", textDecoration: "none" }}>
                Our Service
              </Link>
            )}
          </Nav.Link>
          <Nav.Link className="nav-link me-2" href="#why-us-id">
            {location.pathname === "/landing" ? (
              <a href="#why-us-id" style={{ color: "black", textDecoration: "none" }}>
                Why Us
              </a>
            ) : (
              <Link to="/landing" style={{ color: "black", textDecoration: "none" }}>
                Why Us
              </Link>
            )}
          </Nav.Link>
          <Nav.Link className="nav-link me-2" href="#testimonial-id">
            {location.pathname === "/landing" ? (
              <a href="#testimonial-id" style={{ color: "black", textDecoration: "none" }}>
                Testimonial
              </a>
            ) : (
              <Link to="/landing" style={{ color: "black", textDecoration: "none" }}>
                Testimonial
              </Link>
            )}
          </Nav.Link>
          <Nav.Link className="nav-link me-2" href="#faq-id">
            {location.pathname === "/landing" ? (
              <a href="#faq-id" style={{ color: "black", textDecoration: "none" }}>
                FAQ
              </a>
            ) : (
              <Link to="/landing" style={{ color: "black", textDecoration: "none" }}>
                FAQ
              </Link>
            )}
          </Nav.Link>
          <Nav.Link id="close-icon" className={`nav-link me-2 d-none ${sideNavbarActive ? "" : "d-none"}`} onClick={closeSideNavbar}>
            <IoClose />
          </Nav.Link>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
