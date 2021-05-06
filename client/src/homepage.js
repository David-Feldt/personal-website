import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import Education from "./Education";

function Main(){

    return(
    <>
    <div className="main">
      <div class="section section-nude">
        <Container>
          {/* <!-- WORK --> */}
          <Education />
        </Container>              
      </div>
      <div class="section section-dark">
        <Container>
        {/* <!-- PROJECTS --> */}
        <div class="">
            <h5 class="card-title">have furthest left displayed</h5>
            <p class="card-text">Logos, date, posisistion</p>
            <a href="#" class="btn btn-primary">link to</a>
          </div>
        </Container>
      </div>
      <div class="section section-nude">
        <Container>
        {/* <!-- other --> */}
        <div>
            <h5 class="card-title">Add cool display</h5>
            <p class="card-text">Simple for now</p>
            <a href="#" class="btn btn-primary">link to</a>
          </div>
        </Container>
      </div>    
    </div>
      
    </>
    )
}

export default Main