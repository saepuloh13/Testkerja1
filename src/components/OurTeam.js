import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Richard from '../images/Richard.png';
import George from '../images/George.png';
import Jane from '../images/Jane.png';
import Rachel from '../images/Rachel.png';
import Diana from '../images/Diana.png';
import Tifanny from '../images/Tifanny.png';
import Gregor from '../images/Gregor.png';
import Anna from '../images/Anna.png';


class OurTeam extends React.Component {
    render() {
        return (
            <div className="cover">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="ourteam"> <a href="/ourteam"><strong>OUR TEAM</strong></a></div>
                            <div className="" style={{ width: 80, height: 4, background: 'blue' }} />
                        </Col>
                        <Col sm={8} className="ourteam">
                            Lorem et ornare est amet! Donec ultricies, tortor posuere, diam eros rutrum sem, at<br />
                            scelerisque nisl lectus et nulla. Fusce congue, elit a lacinia luctus, augue magna<br />
                            fringilla tortor,et ornare est turpis ut est dolor.
              </Col>
                    </Row>
                    <Row>
                        <Col className="user">
                            <img src={Richard} alt={Richard} />
                            <h4>Richard G.</h4>
                            <p>co-founder, technical lead,8+<br />years experince</p>
                        </Col>
                        <Col className="user">
                            <img src={George} alt={George} />
                            <h4>George B.</h4>
                            <p>co-founder, mobile apps<br />production,8+ years experince</p>
                        </Col>
                        <Col className="user">
                            <img src={Jane} alt={Jane} />
                            <h4>Jane M.</h4>
                            <p>co-founder, web apps<br />development, 12+ experince</p>
                        </Col>
                        <Col className="user">
                            <img src={Rachel} alt={Rachel} />
                            <h4>Rachel T.</h4>
                            <p>game designer, 12+years<br />experince</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="user">
                            <img src={Diana} alt={Diana} />
                            <h4>Diana F.</h4>
                            <p>art director, 15+years<br />experince</p>
                        </Col>
                        <Col className="user">
                            <img src={Tifanny} alt={Tifanny} />
                            <h4>Tifanny K.</h4>
                            <p>prorammer, 5+years<br />experince</p>
                        </Col>
                        <Col className="user">
                            <img src={Gregor} alt={Gregor} />
                            <h4>Gregor H.</h4>
                            <p>prorammer, 3+years<br />experince</p>
                        </Col>
                        <Col className="user">
                            <img src={Anna} alt={Anna} />
                            <h4>Anna G.</h4>
                            <p>prorammer, 2+years<br />experince</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default OurTeam;