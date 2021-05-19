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