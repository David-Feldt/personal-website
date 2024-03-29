import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

function Work(){
    return(
        
        <div>
            <h1 className='title title-section'>WORK EXPERIENCE</h1>
            <Row>
                <Col xs={4}>
                <img 
                className="icon-logo-2 align-items-center"
                src={
                    require("./assets/img/lightster.webp")
                    .default
                    }>

                </img>
                </Col>
                <Col xs={8}>
                <h3><b>Lightster - Software Engineer</b></h3>
                <p><b>Summer 2022 | Toronto, ON</b></p>
                <p>
                <li>
                Developed recommendation algorithm to connect users with companies based on targeted criteria's
                </li>
                <li>
                Constructed automated email service to send notifications to increase user engagement
                </li>
                <li>
                Generated database migration script to reorganize old data into production usable structure
                </li>
                <li>
                Integrated Elasticsearch into user communities and criteria's search bar to increase result recall 
                </li>
                </p>
                <br />
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                <img 
                className="icon-logo-2 align-items-center"
                src={
                    require("./assets/img/zebra.png")
                    .default
                    }>

                </img>
                </Col>
                <Col xs={8}>
                <h3><b>Zebra Robotics - Robotics Instructor</b></h3>
                <p><b>Fall 2021 | Missisauga, ON</b></p>
                <p>
                <li>
                Coached youth on Lego EV3 robotics using spike-based programming for robot navigation
                </li>
                <li>
                Instructed youth on Unity using C# for 2D game development
                </li>
                </p>
                <br />
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                <img 
                className="icon-logo-2 align-items-center"
                src={
                    require("./assets/img/Lean_Payments.png")
                    .default
                    }>

                </img>
                </Col>
                <Col xs={8}>
                <h3><b>Lean Payments - Software Engineer</b></h3>
                <p><b>Winter 2021 | Waterloo, ON</b></p>
                <p>
                <li>
                Developed RESTful APIs to manage international payment orders using AWS, Node.js, and third-party APIs                </li>
                <li>
                Utilized Serverless framework and AWS microservice architecture for a low cost, auto-scalable cloud infrastructure
                </li>
                <li>
                Implemented RESTful APIs into React Front-end to create, view and edit payment orders                </li>
                <li>
                Integrated state management in React front-end using Redux, to provide structure and advance scalability
                </li>
                <li>
                Implemented automated split stack deployments using AWS CloudFormation and Bitbucket Pipelines, increasing
deployment speed by 300%
                </li>
                <li>
                Documented APIs and deployment setup with Swagger and Markdown
                </li>
                </p>
                <br />
                <small><Button className='btn-round' href="https://my.leanpayments.com/"> Platform Website</Button></small>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                <img 
                className="icon-logo-2 align-items-center"
                src={
                    require("./assets/img/TQI logo transparent.JPG")
                    .default
                    }>

                </img>
                </Col>
                <Col xs={8}>
                <h3><b>Thompson Flow Investigations - Technical Assistant</b></h3>
                <p><b>Summer 2020 | Missisauga, ON</b></p>
                <p>
                    <li>
                    Developed torontosmoketesting.ca website using JavaScript and HTML/CSS with a contact form, interactive map,
and live twitter feed integration to notify residents of sanitary sewer testing                    </li>
                    <li>
                    Streamlined and tested flow monitor database using Excel macros
                    </li>
                    <li>
                    Serviced and installed flow monitors using compound weirs to measure flow data
                    </li>
                    <li>
                    Qualified flow monitor and sensor inventory by conducting pressure, velocity, and technical readings tests
                    </li>
                </p>
                <br />
                <small><Button className='btn-round btn-success' href="https://torontosmoketesting.ca/"> Project Website</Button></small>
                </Col>
            </Row>
          </div>
    )
}

export default Work;