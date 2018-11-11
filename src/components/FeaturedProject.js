import React from 'react';
import { Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';
import Slider from './Slider';

class FeaturedProject extends React.Component {
    render() {
        return (
            <div className="cover">
                <Container>
                    <div className="featuredproject">
                        <strong> Featured Project</strong>
                        <h4><a href="/featturedproject">
                            <strong>THE SEVEN APP</strong></a></h4>
                        <div className="" style={{ width: 80, height: 4, background: 'blue', margin: 'auto' }} />
                        <p>

                            Etiam vel lacus sed tellus dignissim iaculis. Donec ultricies, tortor eu blandit posuere,<br />
                            diam eros rutrum sem, at scelerisque nisl lectus et nulla. Fusce congue, elit a lacinia<br />
                            luctus, augue magna frigilla tortor, et ornare est turpis ut est dolor.</p>
                    </div>
                    <Slider />
                    <div className="d-flex justify-content-center iconimage">
                        <Button color="default">
                            <FontAwesomeIcon icon={faGooglePlay} /> Google Play
                        </Button>
                        <Button color="default ml-2">
                            <FontAwesomeIcon icon={faAppStore} /> App Store
                        </Button>
                    </div>
                </Container>
            </div>
        );

    }
}

export default FeaturedProject;