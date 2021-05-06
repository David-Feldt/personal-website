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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Button className='btn-round'> Project Website</Button>
                </Col>
            </Row>
          </div>
    )
}

export default Work;