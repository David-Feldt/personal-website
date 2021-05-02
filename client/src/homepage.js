import React, { useState, useEffect } from 'react'
// import { Navbar } from "react-bootstrap";

function Main(){

    return(
    <>
     <div class="jumbotron jumbotron-fluid bg-transparent intro-section my-auto">
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <div class="intro-text">
                      <h1 class="display-4 main-title">Hi My Name is David</h1>
                      <p class="lead">Add brief description of previous stuff</p>
                    </div>
                  </div>
                  <div class="col-sm">
                    <img class="cutout" src="images/Website.png" alt="" />  
                  </div>
                </div>
                <div class="row">
                  <div>
                    <h1 class="container logo-slot">ADD LOGOS HERE</h1>
                  </div>
                </div>
              </div>
    </div>
    <div class="body-section">
          <div class="container">
            {/* <!-- card swap --> */}
            <ul class="nav nav-pills mb-3 justify-content-center nav-fill" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="false">WORK</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="true">PROJECTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">OTHER</a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              
              {/* <!-- WORK --> */}
              <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <h5 class="card-title">Add cool display</h5>
                <p class="card-text">Simple for now</p>
                <a href="#" class="btn btn-primary">link to</a>

              </div>
              {/* <!-- PROJECTS --> */}
              <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <h5 class="card-title">have furthest left displayed</h5>
                <p class="card-text">Logos, date, posisistion</p>
                <a href="#" class="btn btn-primary">link to</a>
            
              </div>
              
              {/* <!-- other --> */}
              <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <h5 class="card-title">Add cool display</h5>
                <p class="card-text">Simple for now</p>
                <a href="#" class="btn btn-primary">link to</a>
              </div>

            </div>

     
          
          </div>
        </div>
    </>
    )
}

export default Main