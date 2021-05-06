/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  NavDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "react-bootstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/#home"
            >
            David Feldt
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
         <Navbar.Collapse
          className="justify-content-end"
        >
          <Nav>
            <NavItem>
              <NavLink
                href="/#Work"
              >
                <i className="nc-icon nc-briefcase-24" /> Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/#Projects"
              >
                <i className="nc-icon nc-settings" /> Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/#Education"
              >
                <i className="nc-icon nc-hat-3" /> Education
              </NavLink>
            </NavItem>
            <NavDropdown title={<><i className="nc-icon nc-book-bookmark" /> Other</>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Photography</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Artwork</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog Posts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Lists</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
           </NavDropdown>
            <NavItem>
              <Button
                className="btn-round btn-success"
                color="danger"
                href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-index-navbar"
                target="_blank"
              >
                <i className="nc-icon nc-send"></i> Resume
              </Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
