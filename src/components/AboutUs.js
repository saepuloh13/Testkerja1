import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faIndustry, faMobile, faFileDownload } from '@fortawesome/free-solid-svg-icons';


class AboutUs extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="about"> <a href="/aboutus"><strong>ABOUT US</strong></a></div>
                        <div className="" style={{ width: 80, height: 4, background: 'blue' }} />
                    </Col>
                    <Col sm={8} className="about">
                        Vivamus rutrum ante at sapien volutpat aliquam. Proin sed ipsum bibendum,
                        bibendum urna nec, elementum lorem. Etiam vel lacus sed tellus dignissim iaculis.
                        Donec ultricies, tortor eu blandit posuere, diam eros rutrum sem, at scelerisque nisl
                        lectus et nulla. Fusce congue, elit a lacinia luctus, augue magna fringilla tortor, et
                        ornare est tupis ut est.
              </Col>
                </Row>
                <br />
                <Row className="icon-center">
                    <Col className="icon-text">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <h4>Team of highly experienced <br/>
                        professionals</h4>
                    </Col>
                    <Col className="icon-text">
                        <FontAwesomeIcon icon={faIndustry} className="icon" />
                        <h4>Industry experience:
                                <br /> 8 years</h4>
                    </Col>
                    <Col className="icon-text">
                        <FontAwesomeIcon icon={faMobile} className="icon" />
                        <h4>25+mobile games & apps
                                <br /> developed</h4>
                    </Col>
                    <Col className="icon-text">
                        <FontAwesomeIcon icon={faFileDownload} className="icon" />
                        <h4>10 000 000+
                                <br /> downloads</h4>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutUs;