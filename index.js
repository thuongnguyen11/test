import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App></App>
      <App></App>
      <App></App>
      <App></App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div>
        <img src="image1.jpg" alt="slide 1" />
      </div>
      <div>
        <img src="image2.jpg" alt="slide 2" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
