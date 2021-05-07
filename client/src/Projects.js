import React from 'react'
import {Row, Col , Card, CardDeck , Badge , Button} from 'react-bootstrap'

function Projects(){
    return(
        <div class="">
            <h1 className='title title-section'>PROJECTS</h1>
            <Row>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/Website.PNG").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">React</Badge></small>
                    <Card.Text>
                    <h6>Personal Website</h6>
                    <h6><small>Portfolio Website that has some of the things I've done</small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small><Button className='btn-outline-default btn-round sm-button'>Github</Button></small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/Monitor.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="warning">FUSION 360</Badge></small>
                    <Card.Text>
                    <h6>Laptop Panel Monitor</h6>
                    <h6><small>Built a side monitor by using a control board and recycling an old laptop panel</small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/hyper_loop.png").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="danger">SOLIDWORKS</Badge></small>
                    <Card.Text>
                    <h6>HYPERLOOP INTERIOR</h6>
                    <h6><small>Designed interior for mock hyperloop train</small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/woodworking.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="default">DIY</Badge></small>
                    <Card.Text>
                    <h6>Wood-Working Projects</h6>
                    <h6><small>1. Skateboard Rail <br /> 2. Dumbell Rack <br /> 3. Squat Rack</small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/machine-learning.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">React</Badge></small>
                    <Card.Text>
                    <h6>3D printed</h6>
                    <h6><small>This is a wider card with supporting text below as a natural lead-in </small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/Asteroid.png").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Python</Badge> <Badge pill variant="default">Flask</Badge></small>
                    <Card.Text>
                    <h6>Asteroid Simulator</h6>
                    <h6><small>3D Solar System Simulaton that simulates Asteroids orbits</small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/Asteroid.png").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Python</Badge> <Badge pill variant="default">Flask</Badge></small>
                    <Card.Text>
                    <h6>Asteroid Simulator</h6>
                    <h6><small>3D Solar System Simulaton that simulates Asteroids orbits</small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/Asteroid.png").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Python</Badge> <Badge pill variant="default">Flask</Badge></small>
                    <Card.Text>
                    <h6>Asteroid Simulator</h6>
                    <h6><small>3D Solar System Simulaton that simulates Asteroids orbits</small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/Asteroid.png").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Python</Badge> <Badge pill variant="default">Flask</Badge></small>
                    <Card.Text>
                    <h6>Asteroid Simulator</h6>
                    <h6><small>3D Solar System Simulaton that simulates Asteroids orbits</small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/Asteroid.png").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Python</Badge> <Badge pill variant="default">Flask</Badge></small>
                    <Card.Text>
                    <h6>Asteroid Simulator</h6>
                    <h6><small>3D Solar System Simulaton that simulates Asteroids orbits</small></h6>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Homemade Monitor</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    </Card>
                </Col>
            </Row>
          </div>
    )
}

export default Projects;