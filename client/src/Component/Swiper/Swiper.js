
import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import couplePic from "../../Photos/couple.jpg";
import couplePic1 from "../../Photos/couple1.jpg";
import couplePic3 from "../../Photos/couple3.jpg";
import couplePic4 from "../../Photos/couple4.jpg";
import couplePic6 from "../../Photos/couple6.jpg";
import couplePic7 from "../../Photos/couple7.jpg";
import couplePic8 from "../../Photos/couple8.jpg";
import couplePic9 from "../../Photos/couple9.jpg";
import couplePic10 from "../../Photos/couple10.jpg";
import couplePic11 from "../../Photos/couple11.jpg";
import couplePic12 from "../../Photos/couple12.jpg";
import couplePic13 from "../../Photos/couple13.jpg";
import couplePic14 from "../../Photos/couple14.jpg";
import "./Swiper.css";

const name = {
    color: "#260CC6",
    fontSize: "25px",
    color: "#007bff"
}



export default class Default extends Component {


    render() {
        const swiper = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: '.swiper-pagination'
            }
        };
        return (
            <Swiper{...swiper}>

            <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="details">
                        <h3 style={name}>Logan and Trisha</h3>
                    </div>
                    <div className="imgBx">
                        <img src={couplePic6} alt="couple"></img>
                    </div>

                </div>
            </div>
        </div>
               

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Trevon and Kim</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic1} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>

              


                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Steven and Alice</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic4} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Colin and Claire</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic10} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Coleman and Angel</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic3} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Hunter and Abigail</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic11} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Maxwell and Allison</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic12} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Paul and Kiara</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic13} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Cody and Katie</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic14} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>

                


                <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="details">
                            <h3 style={name}>Anthony and Ellen</h3>
                        </div>
                        <div className="imgBx">
                            <img src={couplePic} alt="couple"></img>
                        </div>

                    </div>
                </div>
            </div>

            <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="details">
                        <h3 style={name}>Brett and Emma</h3>
                    </div>
                    <div className="imgBx">
                        <img src={couplePic8} alt="couple"></img>
                    </div>

                </div>
            </div>
        </div>

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Bradley and Shaina</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic7} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>

               

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="details">
                                <h3 style={name}>Jacob and Carly</h3>
                            </div>
                            <div className="imgBx">
                                <img src={couplePic9} alt="couple"></img>
                            </div>

                        </div>
                    </div>
                </div>

              


            </Swiper>
        )
    }
}
