import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import resume from './assets/pdf/Resume_v8(ELECTRICAL).pdf'
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
            href="/personal-website/#home"
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
                href="/personal-website#Work"
              >
                <i className="nc-icon nc-briefcase-24" /> Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/personal-website#Projects"
              >
                <i className="nc-icon nc-settings" /> Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/personal-website#Education"
              >
                <i className="nc-icon nc-hat-3" /> Education
              </NavLink>
            </NavItem>
            <NavDropdown title={<><i className="nc-icon nc-book-bookmark" /> Other</>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/personal-website/other">Photography</NavDropdown.Item>
              <NavDropdown.Item href="/personal-website/other">Artwork</NavDropdown.Item>
              <NavDropdown.Item href="/personal-website/other">Blog Posts</NavDropdown.Item>
              <NavDropdown.Item href="/personal-website/other">My Lists</NavDropdown.Item>
              <NavDropdown.Item href="/personal-website/other">Contact</NavDropdown.Item>
           </NavDropdown>
            <NavItem>
              <Button
                className="btn-round btn-success"
                color="danger"
                href={resume}
                target='_blank'
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