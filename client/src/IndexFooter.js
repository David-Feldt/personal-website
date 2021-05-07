/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "react-bootstrap";

function IndexFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="/"
                >
                  David Feldt
                </a>
              </li>
              <li>
                <a>                
                  dsfeldt@gmail.com
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made by David Feldt
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default IndexFooter;
