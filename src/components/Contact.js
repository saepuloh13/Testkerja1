import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faHotel, faMobile } from '@fortawesome/free-solid-svg-icons'

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `70%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))

class Contact extends React.Component {
    render() {
        return (
            <div className="cover">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="contact"> <a href="/contact"><strong>CONTACT</strong></a></div>
                            <div className="" style={{ width: 80, height: 4, background: 'blue' }} />
                        </Col>
                        <Col sm={4} className="mt-3 contact">
                            <div className="d-flex">
                                <div className="d-flex align-items-start">
                                    <FontAwesomeIcon icon={faHotel} className="icon-contact" />
                                </div>
                                <div className="ml-3">121 Rock Street, 21 Avenue, San- <br /> Francisco, SF 92103-9000</div>
                            </div>
                            <div className="d-flex align-items-start mt-3">
                                <FontAwesomeIcon icon={faWhatsapp} className="icon-contact" />
                                <div className="ml-3">+001 1234 5678</div>
                            </div>
                            <div className="d-flex align-items-start mt-3">
                                <FontAwesomeIcon icon={faTwitter} className="icon-contact" />
                                <div className="ml-3">@premium_theme</div>
                            </div>
                        </Col>
                        <Col sm={4} className="mt-3 contact">
                            <div className="d-flex">
                                <div className="d-flex align-items-start">
                                    <FontAwesomeIcon icon={faMobile} className="icon-contact" />
                                </div>
                                <div className="ml-3">1 (234) 567-891<br />
                                    1 (234) 987-654</div>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex align-items-start mt-3">
                                    <FontAwesomeIcon icon={faCodepen} className="icon-contact" />
                                </div>
                                <div className="ml-3 mt-3">@hello@dream-theme.com</div>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex align-items-start mt-3">
                                    <FontAwesomeIcon icon={faFacebook} className="icon-contact" />
                                </div>
                                <div className="ml-3 mt-3">@WordPress.Premium.Theme</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div className="form"><strong>Send Us a Message</strong></div>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="text" placeholder=" Name * " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="email" name="email" placeholder=" E-mail * " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="textarea" id="isipesan" placeholder=" Message * " />
                                </FormGroup>
                                <Button className="button"><strong>Send Message</strong></Button>
                            </Form>
                        </Col>
                        <Col sm={6}>
                            <div className="peta"><strong>We Are Here</strong>
                                <MyMapComponent isMarkerShown /></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;