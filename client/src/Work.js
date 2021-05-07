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
                Developed RESTful APIs for payment orders using AWS, Node.Js, and 3rd Party APIs to easily manage one’s international payments.                                                    
                </li>
                <li>
                Integrated state management in React front-end using Redux, to keep track of user session information for a more organized and well-structured application
                </li>
                <li>
                Implemented automated split stack deployments using AWS CloudFormation and Bitbucket Pipelines to solve resource limit errors and provide a more structured project
                </li>
                <li>
                Created documentation for APIs and deployment setup using Swagger and Markdown for new devs working on the project
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
                    <li>Developed torontosmoketesting.ca website, using HTML/CSS, JavaScript with contact form and interactive map, to notify residents of sanitary sewer testing being conducted</li>
                    <li>Streamlined flow sensor database using excel programming to create a more effective spreadsheet</li>
                    <li>Formulated flow sensors field data using command line scripts to prepare results for clients</li>
                </p>
                <br />
                <small><Button className='btn-round btn-success' href="https://torontosmoketesting.ca/"> Project Website</Button></small>
                </Col>
            </Row>
          </div>
    )
}

export default Work;