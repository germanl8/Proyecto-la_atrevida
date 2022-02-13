import React, { useState, useRef } from "react";
import Portada from "../img/portada.webp";
import Portada3 from "../img/portada3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Wapp from '../img/wapp.png';


const Slide = () => {

    return (

        <div>

            <div id="container-carousel" className="sombra">
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
            </div>


            <div id="container-wapp">

                <a className="txt-wsp" id="btn_wapp" href="https://api.whatsapp.com/send?phone=+59899840548" target="_blank"> - To make a reservation now!</a>
                <img src={Wapp} alt="WhatsApp" className="btn-wsp" />
                <a id="btn_wapp" href="https://api.whatsapp.com/send?phone=+59899840548" target="_blank">
                    <img src={Wapp} alt="WhatsApp" className="btn-wsp" />
                </a>
            </div>
        </div>

    )
}

export default Slide;