import React, { useState } from "react";
import Portada from "../img/portada.webp";
import Portada2 from "../img/portada2.jpg";
import Portada3 from "../img/portada3.jpg";
import Portada4 from "../img/portada4.jpg";
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {



    return (

        <div>
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

            <div id="contenido_web2" className="mx-auto"></div>
            <div id="contenido_web3" className="mx-auto"></div>

        </div>

    )
}

export default Slide;