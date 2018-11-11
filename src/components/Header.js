import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="bg">
                <img src={require('../images/background.jpg')} alt="Snow" style={{ width: "100%", height: 400 }} />
                <div className="bg-overlay" />
                <div className="centered">
                   <h1> Seven Dev </h1>
                   <span>MOBILE GAMES & APPS DEVELOPMENT</span>
            
                    
                </div>
            </div>
        );
    }
}

export default Header;