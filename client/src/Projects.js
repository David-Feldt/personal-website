import React, {useEffect, useState} from 'react'
import {Row, Col , Card, CardDeck , Badge , Button} from 'react-bootstrap'



function createProject(project){
    //console.log(project)
    const months = [
        "January", "February", 
        "March", "April", "May", 
        "June", "July", "August",
        "September", "October", 
        "November", "December"
    ];
    if(project){
        let date = new Date(project.date)
        console.log(date.getMonth())
        return(
            <Col lg={3} md={4} xs={6} className="pb-2">
            <Card lg={3} md={4} xs={6} >
            <Card.Header variant="top"
                className='project-thumbnail'
                style={{
                backgroundImage:
                `url(${project.file})`,
                }}
             ></Card.Header>
            <Card.Body>
            <small><Badge pill variant="primary">{project.using[0].name}</Badge></small>
            <Card.Text>
            <h6>{project.title}</h6>
            <h6><small>{months[date.getMonth()]} {date.getFullYear()}</small></h6>
            <small className="text-muted">{project.description}</small>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small><Button className='btn-outline-default btn-round sm-button' href="https://github.com/David-Feldt/personal-website">Github</Button></small>
            </Card.Footer>
            </Card>
        </Col>)
    }
    else{
        return(<p>Loading</p>)
    }
    
}

function Projects(){
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])
    const getProjects = async() => {
        setLoading(true)
        const res = await fetch('http://localhost:5050/projects')
        const data = await res.json()
        setLoading(false);
        setProjects(data);
        //console.log(projects)
    }
    useEffect(() => {
        getProjects()
        console.log(projects)
    },[])
    return(
        <div className="">
            <h1 className='title title-section'>PROJECTS</h1>
            <Row>
            {projects.map((item,i) => (
                createProject(item)
            ))}
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
                    <h6><small>May 2021</small></h6>
                    <small className="text-muted">Portfolio Website that has some of the things I've done</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small><Button className='btn-outline-default btn-round sm-button' href="https://github.com/David-Feldt/personal-website">Github</Button></small>
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
                    <h6><small>March 2021</small></h6>
                    <small className='text-muted'>Built a side monitor by using a control board and recycling an old laptop panel</small>
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
                    <h6><small>February 2021</small></h6>
                    <small className="text-muted">Designed and assembled interior for mock Hyperloop train</small>
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
                        "url(" + require("./assets/img/woodworking.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="default">DIY</Badge></small>
                    <Card.Text>
                    <h6>Wood-Working Projects</h6>
                    <h6><small>WINTER 2021</small></h6>
                    <small className='text-muted'>1. Skateboard Rail <br /> 2. Dumbell Rack <br /> 3. Squat Rack</small>
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
                        "url(" + require("./assets/img/3Dprinted.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="warning">Fusion 360</Badge></small>
                    <Card.Text>
                    <h6>3D prints</h6>
                    <h6><small>FALL 2020</small></h6>
                    <small className="text-muted">1. Skateboard hook <br /> 2. Soldering spider <br /> 3. Key holder </small>
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
                        "url(" + require("./assets/img/Asteroid.png").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="info">Python</Badge> <Badge pill variant="default">Flask</Badge></small>
                    <Card.Text>
                    <h6>Asteroid Simulator</h6>
                    <h6><small>November 2020</small></h6>
                    <small className='text-muted'>3D solar system simulaton for predicting asteroids collisions and orbits</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small><Button className='btn-outline-default btn-round sm-button' href="https://github.com/David-Feldt/SchrodingherHack">Github</Button></small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/Car.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Arduino</Badge> <Badge pill variant="warning">Fusion 360</Badge></small>
                    <Card.Text>
                    <h6>IR Control Car</h6>
                    <h6><small>SUMMER 2020</small></h6>
                    <small className="text-muted">Arduino car controlled by old Airhogs remote</small>
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
                        "url(" + require("./assets/img/tofacts.png").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="warning">JavaScript</Badge> <Badge pill variant="success">HTML/CSS</Badge></small>
                    <Card.Text>
                    <h6>Fact Checking Website</h6>
                    <h6><small>MAY 2020</small></h6>
                    <small className='text-muted'>Fact validity checker search bar website</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small><Button className='btn-outline-info btn-round sm-button' href='https://devpost.com/David-Feldt'>DEVPOST</Button></small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/make-uof.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Arduino</Badge> <Badge pill variant="danger">AWS</Badge></small>
                    <Card.Text>
                    <h6>IOT mini-smarthome</h6>
                    <h6><small>March 2020</small></h6>
                    <small className='text-muted'>Wifi-enabled minature IoT demo smart home device</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small><Button className='btn-outline-info btn-round sm-button' href='https://devpost.com/David-Feldt'>DEVPOST</Button></small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/mailbox.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Arduino</Badge></small>
                    <Card.Text>
                    <h6>Smart Mailbox</h6>
                    <h6><small>MARCH 2020</small></h6>
                    <small>Concept of IoT Mailbox to protect against package theft</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small><Button className='btn-outline-info btn-round sm-button' href='https://devpost.com/David-Feldt'>DEVPOST</Button></small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/rover.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Arduino</Badge> <Badge pill variant="default">Google Cloud</Badge></small>
                    <Card.Text>
                    <h6>Inventory Rover</h6>
                    <h6><small>JANurary 2020</small></h6>
                    <small className='text-muted'>Moving rover with image recognition</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small><Button className='btn-outline-info btn-round sm-button' href='https://devpost.com/David-Feldt'>DEVPOST</Button></small>
                    </Card.Footer>
                    </Card>
                    </Col>
                    <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/loading.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <Card.Text>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <h6>More Info Coming soon</h6>
                    </Card.Footer>
                    </Card>
                </Col>
            </Row>
          </div>
    )
}

export default Projects;