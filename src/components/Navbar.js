import React, { useReducer } from 'react';
import { FaDesktop, FaHome, FaMusic, FaUser, FaBars } from 'react-icons/fa'

// function App() {
//     return (
//         <>
//             <nav className="nav-menu">
//                 <ul>
//                     <li className="active"><a href="/"><FaHome /><span>Home</span></a></li>
//                     <li><a href="#about"><FaUser /><span>About</span></a></li>
//                     <li><a href="#skills"><FaUser /><span>Skills</span></a></li>
//                     <li><a href="#music"><FaMusic /><span>Music</span></a></li>

//                 </ul>
//             </nav>
//             <FaBars className="mobile-nav-toggle d-xl-none" color="white" />
//         </>
//     );
// }

// export default App;

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
                <li onClick={toggle} > <button className={hideNav ? "btn button-shape mobile-button" : "btn button-shape mobile-button clicked"}><FaBars /></button></li>
            </nav>
        </>
    );
}

export default NavBar;