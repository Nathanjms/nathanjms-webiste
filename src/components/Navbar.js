import React from 'react';
import { FaBars, FaHome, FaMusic, FaUser } from 'react-icons/fa'

function App() {
    return (
        <>
            <nav className="nav-menu">
                <ul>
                    <li className="active"><a href="/"><FaHome /><span>Home</span></a></li>
                    <li><a href="#about"><FaUser /><span>About</span></a></li>
                    <li><a href="#music"><FaMusic /><span>Music</span></a></li>

                </ul>
            </nav>
            <FaBars className="mobile-nav-toggle d-xl-none" color="white" />
        </>
    );
}

export default App;
