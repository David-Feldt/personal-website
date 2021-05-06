import React from 'react'
import {Row, Col} from 'react-bootstrap'

function Education(){
    return(
        <div class="" >
        <h1 className='title title-section'>EDUCATION</h1>
        <Row className="p-2 my-4 row-entry">
            <Col xs={3}>
                <img 
                className="icon-logo align-items-center"
                src={
                              require("./assets/img/University_of_Waterloo.png")
                                .default
                            }>

                </img>
            </Col>
            <Col xs={6}>
            <h3><b>Unviersity of Waterloo</b></h3>
            <p><b>Bachelor of Applied Science - BASc, Mechatronics Engineering</b></p>
            <p>2019-2024</p>
            </Col>
            <Col xs={3} className="ultra-align">
                <h6 className="text-ultra-align">More &nbsp; <i className="nc-icon nc-minimal-right"> </i></h6>
            </Col>
        </Row>
        <Row className="my-4 p-2 row-entry">
            <Col xs={3}>
                <img 
                className="icon-logo align-items-center"
                src={
                              require("./assets/img/York_Region.png")
                                .default
                            }>

                </img>
            </Col>
            <Col xs={6}>
            <h3><b>Vaughan Secondary School</b></h3>
            <p><b>High School Diploma</b></p>
            <p>2015-2019</p>
            </Col>
            <Col xs={3} className="ultra-align">
                <h6 className="text-ultra-align">More &nbsp; <i className="nc-icon nc-minimal-right"> </i></h6>
            </Col>
        </Row>
        <br />
        <h5><b>Other Courses</b></h5>
        <br />
        <Row>
            <Col lg={3} md={4} xs={6} className="pb-2">
                <div 
                className="education-thumbnail" style={{
                backgroundImage:
                "url(" + require("./assets/img/machine-learning.jpg").default + ")",
                }}>
                </div>
                <br />
                    <h6>ML & Data Science</h6>
                    <h6><small> Complete 2020 Data Science & Machine Learning Bootcamp</small> </h6>
                    <h6><small><em>May 2021</em></small></h6>
            </Col>
            <Col lg={3} md={4} xs={6} className="pb-2">
                <div 
                className="education-thumbnail" style={{
                backgroundImage:
                "url(" + require("./assets/img/serverless-stack.jpg").default + ")",
                }}>
                </div>
                <br />
                    <h6>Serverless Stack</h6>
                    <h6><small> Serverless Guide for using AWS Lambda and React.</small> </h6>
                    <h6><small><em>January 2021</em></small></h6>
            </Col>
            <Col lg={3} md={4} xs={6} className="pb-2">
                <div 
                className="education-thumbnail" style={{
                backgroundImage:
                "url(" + require("./assets/img/webdev.jpg").default + ")",
                }}>
                </div>
                <br />
                    <h6>Web Development</h6>
                    <h6><small>The Complete 2020 Web Development Bootcamp</small> </h6>
                    <h6><small><em>December 2020</em></small></h6>
            </Col>
            <Col lg={3} md={4} xs={6} className="pb-2">
            <div 
                className="education-thumbnail" style={{
                backgroundImage:
                "url(" + require("./assets/img/matlab.jpg").default + ")",
                }}>
                </div>
                <br />
                    <h6>MatLab OnRamp</h6>
                    <h6><small>The Complete 2020 Web Development Bootcamp</small> </h6>
                    <h6><small><em>December 2020</em></small></h6>
            </Col>
            <Col lg={3} md={4} xs={6} className="pb-2">
            <div 
                className="education-thumbnail" style={{
                backgroundImage:
                "url(" + require("./assets/img/arduino-starter.jpg").default + ")",
                }}>
                </div>
                <br />
                    <h6>Arduino Project Book</h6>
                    <h6><small>Beginners guide to arduino programming</small> </h6>
                    <h6><small><em>December 2020</em></small></h6>
            </Col>
            <Col>
                <div 
                className="education-thumbnail" style={{
                backgroundImage:
                "url(" + require("./assets/img/dots.jpg").default + ")",
                }}>
                </div>
                <br />
                <h6 className="">More &nbsp; <i className="nc-icon nc-minimal-right"> </i></h6>

            </Col>
        </Row>

            
          </div>
    )
}

export default Education;