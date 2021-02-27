import React from 'react';
import nathan_img from '../images/nathan.jpeg';

function Home() {
    return (
        <div className="container">
            <div className="intro-section">
                <img src={nathan_img} alt="Nathan" />
                <h1>Nathan James.</h1>
                <p>
                    Coming Soon...
                </p>
                <button className="btn btn-primary">Click Me</button>
            </div>
        </div>
    );
}

export default Home;
