import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import Education from "./Education";
import Projects from "./Projects"
import Work from "./Work";
function Main(){

    return(
    <>
    <div className="main">
      <div className="section section-lightblue" id="Work">
        <Container>
          {/* <!-- WORK --> */}
          <Work />

        </Container>              
      </div>
      <div className="section section-dark" id="Projects">
        <Container >
        {/* <!-- PROJECTS --> */}
        <Projects />
        </Container>
      </div>
      <div className="section section-lightpurple" id="Education">
        <Container>
        {/* <!-- other --> */}
        <Education />
        </Container>
      </div>    
    </div>
      
    </>
    )
}

export default Main