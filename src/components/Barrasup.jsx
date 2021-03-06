import React, { useState } from "react";
import Logo from "../img/logo_laatrevida.png";
//import $ from 'jquery';

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";


const Barrasup = () => {


    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const [show, setShow] = useState(false);
    const showDropdown = () => {
        setShow(!show);
    }
    const hideDropdown = () => {
        setShow(false);
    }


    return (

        <div>

            <Navbar className={navbar ? 'background_color' : 'background_color_transparency'} collapseOnSelect expand="lg" fixed="top" id="nav_menu">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="logo" width="172" height="64" className="mx-auto" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 me-lg-0 nav_container_a"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link href="#home" className="colors_letters selector_nav">Home</Nav.Link>
                            <Nav.Link href="#link" className="colors_letters selector_nav">About Us</Nav.Link>

                            <NavDropdown
                                className="colors_letters selector_nav"
                                title="Room & Rates"
                                id="navbarScrollingDropdown"
                                show={show}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown} >

                                <NavDropdown.Item href="#action/3.1" className="colors_letters">Room 1 - Master Suite Atrevida</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="colors_letters">Room 2 - Standard Double</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="colors_letters">Room 3 - Standard Single</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="colors_letters">Room 4 - American Tipi</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#link" className="colors_letters selector_nav">Our Property</Nav.Link>
                            <Nav.Link href="#link" className="colors_letters selector_nav">Contact</Nav.Link>
                            <Nav.Link href="#link" className="colors_letters selector_nav">Location</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <div id="contenido_web11" className="mx-auto">
                <img src={Portada} className="contenido_web1" alt="" />
            </div>
            <div id="contenido_web2" className="mx-auto"></div>
            <div id="contenido_web3" className="mx-auto"></div> */}


        </div>






    )



}
export default Barrasup;