import React from "react";

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import * as Icon from "react-bootstrap-icons";

import { LinkContainer } from "react-router-bootstrap";

function NavbarLayout() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Holidaze
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/housing">
              <Nav.Link>Housing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          {auth ? (
            <>
              {" "}
              <LinkContainer to="/admin">
                <Nav.Link>
                  <Icon.PersonCheckFill color="cyan" size={30} />
                  Dashboard
                </Nav.Link>
              </LinkContainer>{" "}
              <Button variant="primary" type="submit" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <LinkContainer to="/login">
                <Nav.Link>
                  {" "}
                  <Icon.PersonFill color="cyan" size={30} />
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Nav.Link>
              </LinkContainer>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarLayout;
