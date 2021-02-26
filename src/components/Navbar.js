import React from 'react';
import { FaBars, FaPersonBooth } from 'react-icons/fa'

function App() {
    return (
        <>
            <nav className="nav-menu">
                <ul>
                    <li className="active"><a href="index.html"><FaPersonBooth /><span>Home</span></a></li>
                    <li><a href="#about"><FaPersonBooth /><span>About</span></a></li>
                    <li><a href="#resume"><FaPersonBooth /><span>Resume</span></a></li>

                </ul>
            </nav>
            <button type="button" class="mobile-nav-toggle d-xl-none"><FaBars /></button>
        </>
    );
}

export default App;
