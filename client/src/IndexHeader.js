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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container , Row, Col} from "react-bootstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("./assets/img/lake-picture.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">David Feldt</h1>
            </div>
            
            <Row>
            <Col className="ml-auto mr-auto" lg="6" >
            <div className="codeBox-outside">
              <div className="codeBox-header">
                <span class="terminal-circle red"></span>
                <span class="terminal-circle yellow"></span>
                <span class="terminal-circle green"></span>
              </div>
              <div className="codeBox-body">
              <code>
                <span className="a">david@feldt </span>
                <span className="b"> MECHATRONICS ENGINEER </span>
                <span className="y">/header/about </span>
                <br /> 
                $ Student at the University of Waterloo studying mechatronics engineering. Interests in iot, machine learning and robotics. Experience with web development, arduino, and CAD. 
              </code>
              </div>
            </div>
            </Col>
          </Row>          </Container>
        </div>
        <div
          className="moving-clouds"
          // style={{
          //   backgroundImage:
          //     "url(" + require("./assets/img/clouds.png").default + ")",
          // }}
        />
        <div className="category category-absolute my-icon">
          <i className="fa fa-linkedin " />
          <i className="fa fa-github " />
          <i className="fa fa-facebook" />
          <i className="fa fa-instagram " />
          <i className="fa fa-youtube " />
          <i className="fa fa-spotify " />
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
