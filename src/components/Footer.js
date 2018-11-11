import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="bgfooter">
                <img src={require('../images/background.jpg')} alt="Snow" style={{ width: "100%", height: 200 }} />
                <div className="bg-overlay" />
                <div className="foottext">
                    <h1> Seven Dev </h1>
                    <span>&copy; 2017 Seven Dev Studio - All Rights Reserved</span>
                </div>
            </div>
        );
    }
}

export default Footer;