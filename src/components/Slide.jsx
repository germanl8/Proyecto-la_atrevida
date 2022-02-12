import React, { useState } from "react";
import Portada from "../img/portada.webp";
import Portada3 from "../img/portada3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Wapp from '../img/wapp.png';


const Slide = () => {






    // const btn_wapp = document.querySelector("#btn_wapp");

    //     btn_wapp.addEventListener("mouseover", function(){
    //         btn_wapp.show = true;
    //    });


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
                <a className="txt-wsp" id="btn_wapp" href="https://api.whatsapp.com/send?phone=+59899840548" target="_blank">- To make a reservation now!</a>
                <img src={Wapp} alt="WhatsApp" className="btn-wsp"/>
            </div>

            <div id="div_aboutus" className="mx-auto" ></div>
            <div id="contenido_web3" className="mx-auto"></div>
        </div>

    )
}

export default Slide;