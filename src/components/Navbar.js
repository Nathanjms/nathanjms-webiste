import React, { useReducer } from 'react';
import { FaDesktop, FaHome, FaMusic, FaUser, FaBars } from 'react-icons/fa'

const li = [
    {
        link: "#home",
        text: "Home",
        icon: <FaHome />,
    },
    {
        link: "#about",
        text: "About",
        icon: <FaUser />,
    },
    {
        link: "#skills",
        text: "Skills",
        icon: <FaDesktop />,
    },
    {
        link: "#music",
        text: "Music",
        icon: <FaMusic />,
    }
];

function NavBar() {

    const [hideNav, toggle] = useReducer(
        (hideNav) => !hideNav,
        true
    );

    return (
        <>
            <nav className="navBar">
                <ul className={hideNav ? "links hide-nav" : "links"}>
                    {
                        li.map((objLink, i) => {
                            return (<li key={i}><a className="button-shape" href={objLink.link}>{objLink.icon}<span>{objLink.text}</span></a></li>)
                        })
                    }
                </ul>
                <li onClick={toggle} > <button className={hideNav ? "btn button-shape mobile-button" : "btn button-shape mobile-button btn-clicked"}><FaBars /></button></li>
            </nav>
        </>
    );
}

export default NavBar;