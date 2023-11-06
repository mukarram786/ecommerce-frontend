import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import crouselImage1 from '../../assets/images/62b5a9572dab880f81c5d178_ajVzMkY7zNN-cU8hLJlTXR93WXkC09AI_0Dm-VBCfWe-kbHdRAAATBpSlNajuRsW7e0jHYCOVjdcHY1Sf-3X4tAI22KAFbbu31rgYGEmgCSV_WUrLFWhWl09ddXm7EhIITjKG0OggdxALfJeGQ.jpeg'
import crouselImage2 from '../../assets/images/croiusel-imge.jpg'
import crouselImage3 from '../../assets/images/Mixtape.jpg'

function Crousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={crouselImage1}
            alt="First slide"
            style={{ width: "300px", height: "600px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={crouselImage2}
            alt="Second slide"
            style={{ width: "300px", height: "600px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={crouselImage3}
            alt="Third slide"
            style={{ width: "300px", height: "600px" }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Crousel;
