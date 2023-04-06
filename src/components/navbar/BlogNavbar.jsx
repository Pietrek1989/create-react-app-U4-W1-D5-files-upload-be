import React, { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { useEffect } from "react";
const NavBar = (props) => {
  const [tokenActive, setTokenActive] = useState(false);
  const getToken = () => {
    return localStorage.getItem("token");
  };
  useEffect(() => {
    if (getToken) {
      setTokenActive(true);
    } else {
      setTokenActive(false);
    }
  }, []);

  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        <div>
          {tokenActive ? (
            <Link
              to={"/"}
              onClick={() => {
                localStorage.setItem("token", "");
                setTokenActive(false);
              }}
            >
              LOG OUT
            </Link>
          ) : (
            <>
              <Link to={"/login"} className="mr-2">
                LOG IN
              </Link>{" "}
              <Link to={"/register"}>REGISTER</Link>
            </>
          )}
          {/* <Link to={"/login"} className="mr-2">
            LOG IN
          </Link>{" "}
          <Link to={"/register"}>REGISTER</Link> */}
        </div>
        <Navbar.Brand as={Link} to="/">
          <img className="blog-navbar-brand" alt="logo" src={props.logo} />
        </Navbar.Brand>

        <Button
          as={Link}
          to="/new"
          className="blog-navbar-add-button bg-dark"
          size="lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
          Post Article
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
