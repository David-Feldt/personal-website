/*eslint-disable*/
import React , { useState, useEffect } from "react";

// reactstrap components
import { Container , Row, Col} from "react-bootstrap";

// core components
function Typer({ textToType, delay, loop }) {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < textToType.length) {
      setTimeout(() => {
        setText(text + textToType[currentIndex]);

        setCurrentIndex(currentIndex + 1);
      }, delay);
    } else if (loop) {
      setText("");

      setCurrentIndex(0);
    }
  }, [currentIndex]);
  return <span>{text}</span>;
}


function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("./assets/img/lake-picture.jpg").default + ")",
        }}
        id="home"
      >
        <div className="filter" />
          <Container className="content-center">
          <div className="content-center">
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
                $ <Typer textToType="Student at the University of Waterloo studying Mechatronics Engineering. Interests in IoT, Machine Learning and Robotics. Experience with Web development, Arduino, and CAD." 
                        delay={50} 
                        loop={false} /><span class="blinking">|</span>
              </code>
              </div>
            </div>
            </Col>
          </Row>
        </div>
        </Container>          
        <div
          className="moving-clouds"
          // style={{
          //   backgroundImage:
          //     "url(" + require("./assets/img/clouds.png").default + ")",
          // }}
        />
        <div className="category category-absolute my-icon">
          <a href="https://www.linkedin.com/in/david--feldt/"><i className="fa fa-linkedin " /></a>
          <a href="https://github.com/David-Feldt"><i className="fa fa-github " /></a>
          <a href="https://www.facebook.com/david.feldt.71"><i className="fa fa-facebook" /></a>
          <a href="https://www.instagram.com/davids_hobbies/"><i className="fa fa-instagram " /></a>
          <a href="https://www.youtube.com/channel/UCC-w1gonicQ723YnfomRobg/featured"><i className="fa fa-youtube " /></a>
          <a href="https://open.spotify.com/user/ozwrfiq5lf5cimom3tt27r4v9?si=164254063f474d08"><i className="fa fa-spotify " /></a>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
