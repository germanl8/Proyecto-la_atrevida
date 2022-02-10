import React, { useState } from "react";
import Portada from "../img/portada.webp";
import Portada2 from "../img/portada2.jpg";
import Portada3 from "../img/portada3.jpg";
import Portada4 from "../img/portada4.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Wapp from '../img/wapp.png';
import { Nav } from "react-bootstrap";

const Slide = () => {



    return (

        <div id="container-carousel">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block portada"
                        src={Portada}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block portada"
                        src={Portada3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div id="container-wapp_link">
            <Nav.Link className="wapp_link" href="https://wa.me/59899840548">
                <img className="wapp_link" src={Wapp} href="https://wa.me/59899840548"/>
                <p className="wapp_link">Consultas por WhatsApp</p>
            </Nav.Link>
            </div>
            

            <div id="contenido_web2" className="mx-auto"></div>
            <div id="contenido_web3" className="mx-auto"></div>

        </div>

    )
}

export default Slide;