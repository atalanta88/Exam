import React from "react";

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import logo from "../../media/Capture.png";

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
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/home">
          <img
            alt=""
            src={logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/home">
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
                </Nav.Link>
              </LinkContainer>{" "}
              <Button variant="primary-color" type="submit" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <LinkContainer to="/login">
                <Nav.Link>
                  {" "}
                  <Icon.PersonFill color="cyan" size={30} />
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
