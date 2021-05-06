import React from 'react'
import {Row, Col , Card, CardDeck , Badge} from 'react-bootstrap'

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
                        "url(" + require("./assets/img/machine-learning.jpg").default + ")",
                        }}
                     ></Card.Header>
                    <Card.Body>
                    <Badge pill variant="primary">Primary</Badge>
                    <Card.Text>
                    <h6>Project Title</h6>
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
                    <Card.Header> TESTING</Card.Header>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
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
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
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
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
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
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
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
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
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
                <Col lg={3} md={4} xs={6} className="pb-2">
                    <Card lg={3} md={4} xs={6} >
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
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
            <h5 class="card-title">have furthest left displayed</h5>
            <p class="card-text">Logos, date, posisistion</p>
            <a href="#" class="btn btn-primary">link to</a>
          </div>
    )
}

export default Projects;