import React from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLightbulb, faStar, faMap } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';


class OurApps extends React.Component {
    render() {
        return (
            <div className="cover">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="ourapps"> <a href="/ourapps"><strong>OUR APP</strong></a></div>
                            <div className="" style={{ width: 80, height: 4, background: 'blue' }} />
                        </Col>
                        <Col sm={8} className="ourapps mt-2">
                            Lorem et ornare est amet! Donec ultricies, tortor posuere, diam eros rutrum sem, at<br />
                            scelerisque nisl lectus et nulla. Fusce congue, elit a lacinia luctus, augue magna<br />
                            fringilla tortor,et ornare est turpis ut est dolor.
              </Col>
                    </Row>
                    <Row className="iconapps">
                        <Col sm={2}>
                            <div className=""><FontAwesomeIcon icon={faDesktop} className="icon" /></div>
                        </Col>
                        <Col className="text-icon"><a href="/"><strong>Seven Ballon Rider</strong></a>
                            <p>Donec ultricies, tortor posuere, diam eros<br />
                                rutrum sem, at scelerisque nisl lectus et<br />
                                nulla. Fusce congue, elit a lacinia luctus,<br />
                                augue magna fringilla tortor, et ornare est<br />
                                turpis ut est dolor.</p>
                            <Button color="default">
                                <FontAwesomeIcon icon={faGooglePlay} /> Google Play
                        </Button>
                            <Button color="default ml-2">
                                <FontAwesomeIcon icon={faAppStore} /> App Store
                        </Button>
                        </Col>
                        <Col sm={2}>
                            <div className=""><FontAwesomeIcon icon={faMap} className="icon" /></div>
                        </Col>
                        <Col className="text-icon"><a href="/"><strong>Seven Sky Explorer</strong></a>
                            <p>Dolor atricies - tortor posuere, diam eros<br />
                                rutrum sem, at scelerique nisl lectus et<br />
                                nulla. Fusce congue, elit a lacinia luctus,<br />
                                augue magna fringilla tortor, et ornare est<br />
                                amet tortor eu blandit posuere.</p>
                            <Button color="default">
                                <FontAwesomeIcon icon={faGooglePlay} /> Google Play
                        </Button>
                            <Button color="default ml-2">
                                <FontAwesomeIcon icon={faAppStore} /> App Store
                        </Button>
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={2}>
                            <div className=""><FontAwesomeIcon icon={faStar} className="icon" /></div>
                        </Col>
                        <Col className="text-icon"><a href="/"><strong>Seven Photo Editor</strong></a>
                            <p>Tortor posuere diam eros rutrum sem - at<br />
                                scelerisque nisl lectus et nulla. Fusce<br />
                                congue, elit a lacinia luctus, augue magna<br />
                                fringilla tortor, et ornare est turpis ut est<br />
                                dolor glavrida.</p>
                            <Button color="default">
                                <FontAwesomeIcon icon={faGooglePlay} /> Google Play
                        </Button>
                            <Button color="default ml-2">
                                <FontAwesomeIcon icon={faAppStore} /> App Store
                        </Button>
                        </Col>
                        <Col sm={2}>
                            <div className=""><FontAwesomeIcon icon={faLightbulb} className="icon" /></div>
                        </Col>
                        <Col className="text-icon"><a href="/"><strong>Seven Puzzle</strong></a>
                            <p>Lorem itricies - tortor posuere, diam eros<br />
                                rutrum isl lectus et posuere diam eros<br />
                                rutrum nulla. Fusce conge, elit a lacinia<br />
                                luctus, augue magna fringilla tortor, et ornare<br />
                                est turpis opsum glavrida.</p>
                            <Button color="default">
                                <FontAwesomeIcon icon={faGooglePlay} /> Google Play
                        </Button>
                            <Button color="default ml-2">
                                <FontAwesomeIcon icon={faAppStore} /> App Store
                        </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default OurApps;