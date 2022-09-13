import React from "react";
import wykonczenie from "./../images/carousel/wykonczenie.png"
import sprzet from "./../images/carousel/sprzet.png"
import elewacje from "./../images/carousel/elewacja.png"
import {Carousel} from "react-bootstrap";

class CarouselTitle extends React.Component {
    render() {
       return <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
           <Carousel>
               <Carousel.Item>
                   <img
                       className="d-block w-100"
                       src={wykonczenie}
                       alt="First slide"
                   />
                   <Carousel.Caption>
                       <div style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
                           <h3>Kompleksowe remonty mieszkań </h3>
                           <p>Profesjonalne wykonczenie mieszkań</p>
                       </div>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block w-100"
                       src= {sprzet}
                       alt="Second slide"
                   />

                   <Carousel.Caption>
                       <div  style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
                           <h3>Wypożyczalnia sprzetu budowlanego</h3>
                           <p>Udostepniamy nasz sprzet klientom inwidualnym</p>
                       </div>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block w-100"
                       src={elewacje}
                       alt="Third slide"
                   />

                   <Carousel.Caption>
                       <div style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
                           <h3>Termomodernizacja budynków</h3>
                           <p>Elewacje,oogrody...</p>
                       </div>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        </div>;
    }
}

export default CarouselTitle;