
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Image from '../images/frame3.jpg'
import Image1 from '../images/frame2.jpg'
import Image2 from '../images/frame1.jpg'
import {Carousel} from 'react-bootstrap'

export const Car = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
   return(
    <div className="ca">
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Image}
        alt="First slide" style={{height : 400}}
      />
      <Carousel.Caption>
      {/*<a href="/Menu" style={{marginTop : 0}} type="button" class="btn btn-primary">Click here to start shopping</a>*/}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Image1}
        alt="Second slide" height = "400" 
      />
      <Carousel.Caption>
            {/*<a href="/Menu" style={{marginTop : 0}} type="button" class="btn btn-primary">Click here to start shopping</a>*/}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Image2}
        alt="Third slide" height = "400" 
      />

      <Carousel.Caption>
           {/*<a href="/Menu" style={{marginTop : 0}} type="button" class="btn btn-primary">Click here to start shopping</a>*/}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
   )
}
export default Car;