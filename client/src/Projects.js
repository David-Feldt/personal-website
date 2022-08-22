import React from 'react'
import {Row, Col , Card, CardDeck , Badge , Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

const loadingImage = "url(" + require("./assets/img/loading.jpg").default + ")";
const mailboxImage = "url(" + require("./assets/img/mailbox.jpg").default + ")";
const roverImage = "url(" + require("./assets/img/rover.jpg").default + ")";
const miniHomeImage = "url(" + require("./assets/img/make-uof.jpg").default + ")";
const factCheckImage = "url(" + require("./assets/img/tofacts.png").default + ")";
const irCardImagone = "url(" + require("./assets/img/Car.jpg").default + ")";
const asteroidImage = "url(" + require("./assets/img/Asteroid.png").default + ")";
const printsImage ="url(" + require("./assets/img/3Dprinted.jpg").default + ")";
const woodworkImage = "url(" + require("./assets/img/woodworking.jpg").default + ")";
const hyperloopImage ="url(" + require("./assets/img/hyper_loop.png").default + ")";
const laptopPanelImage = "url(" + require("./assets/img/Monitor.jpg").default + ")";
const cncPlotterImage = "url(" + require("./assets/img/cnc2.jpg").default + ")";
const ultrasonicImage ="url(" + require("./assets/img/ultrasonic.jpg").default + ")";


function Projects(){
    const [modalShow, setModalShow] = React.useState(false);
    const [modalItem, setModalItem] = React.useState({
        title:'Title', 
        body: 'Body ...',
        image: loadingImage}
        )
    const handleShow = (item) => {
        setModalItem(item)
        setModalShow(true)

    
    }
    return(
        <div class="">
            <h1 className='title title-section'>PROJECTS</h1>
            <Row>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"Ultrasonic Car",
                        body: "Ultrasonic controlled mini vehicle",
                        image: ultrasonicImage,
                        })}}>
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/ultrasonic.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Arduino</Badge> <Badge pill variant="warning">Fusion 360</Badge></small>
                    <Card.Text>
                    <h6>Ultrasonic Car</h6>
                    <h6><small>October 2021</small></h6>
                    <small className="text-muted">Ultrasonic controlled mini vehicle</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                    </Card>
                </Col>
                 <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6}  onClick={() => {setModalShow(true) ; setModalItem({
                        title:"CNC Plotter",
                        body: "Built CNC plotter using stepper motors from CD drives",
                        image: cncPlotterImage,
                        })}}>
                    <Card.Header variant="top"
                        className='project-thumbnail'
                        style={{
                        backgroundImage:
                        "url(" + require("./assets/img/cnc2.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <small><Badge pill variant="primary">Arduino</Badge></small>
                    <Card.Text>
                    <h6>CNC Plotter</h6>
                    <h6><small>September 2021</small></h6>
                    <small className="text-muted">Built CNC plotter using stepper motors from CD drives</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"Laptop Panel Monitor",
                        body: "Built a side monitor by using a control board and recycling an old laptop panel",
                        image: laptopPanelImage,
                        })}}>
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
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"HYPERLOOP INTERIOR",
                        body: "Designed and assembled interior for mock Hyperloop train",
                        image: hyperloopImage,
                        })}} >
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
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"Wood-Working Projects",
                        body: "1. Skateboard Rail 2. Dumbell Rack 3. Squat Rack",
                        image: woodworkImage,
                        })}}>
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
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"3D prints",
                        body: "1. Skateboard hook 2. Soldering spider 3. Key holder",
                        image: printsImage,
                        })}}>
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
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"Asteroid Simulator",
                        body: "3D solar system simulaton for predicting asteroids collisions and orbits",
                        image: asteroidImage,
                        })}} >
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
                    <Card lg={3} md={4} xs={6}  onClick={() => {setModalShow(true) ; setModalItem({
                        title:"IR Control Car",
                        body: "Arduino car controlled by old Airhogs remote",
                        image: irCardImagone,
                        })}}>
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
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"Fact Checking Website",
                        body: "Fact validity checker search bar website",
                        image:factCheckImage,
                        })}}>
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
                    <small class='text-muted'>Fact validity checker search bar website</small>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small><Button className='btn-outline-info btn-round sm-button' href='https://devpost.com/David-Feldt'>DEVPOST</Button></small>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"IOT mini-smarthome",
                        body: "Wifi-enabled minature IoT demo smart home device",
                        image:miniHomeImage,
                        })}}>
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
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"Smart Mailbox",
                        body: "Concept of IoT Mailbox to protect against package theft",
                        image:mailboxImage,
                        })}} >
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
                    <Card lg={3} md={4} xs={6} onClick={() => {setModalShow(true) ; setModalItem({
                        title:"Inventory Rover",
                        body: "Moving rover with image recognition",
                        image:roverImage,
                        })}} >
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
                    <h6><small>Janurary 2020</small></h6>
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
                        backgroundImage: loadingImage,
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <Card.Text>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer onClick={() => setModalShow(true)}>
                    <h6>More Info Coming soon</h6>
                    </Card.Footer>
                    </Card>
                </Col>
            </Row>
      <Project
        show={modalShow}
        onHide={() => setModalShow(false)}
        item = {modalItem}
        />
    </div>
    )
}

function Project(props){
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className='project-picture p-2'
                        style={{
                        backgroundImage: props.item.image
                        }}>
          </Modal.Header>
          <Modal.Body >
          <h3 style={{fontWeight: 'bold'}}>{props?.item?.title}</h3>
        <p> 
            {props.item.body}
        </p>
        <Button variant="danger" onClick={props.onHide}>Close</Button>            
          </Modal.Body>
          
        </Modal>
      ); 
}

export default Projects;