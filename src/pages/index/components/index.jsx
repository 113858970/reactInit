import React from 'react';
import Carousel from './Carousel';
import img1 from './Carousel/example/01.png';
import img2 from './Carousel/example/02.png';
import img3 from './Carousel/example/03.png';
import img4 from './Carousel/example/04.png';
import img5 from './Carousel/example/05.png';
import img6 from './Carousel/example/06.png';
import img7 from './Carousel/example/07.png';

import Ribbon from './Ribbon';

function ComponentDescription() {
  const setting = {
    autoplay: true,
    dots: true,
    arrows: false,
  };
  const moreStyles = {
    display: 'inline-block',
    verticalAlign: 'middle',
    float: 'right',
    fontSize: '0.75em',
  };

  const wrapper = {
    width: '160px',
    float: 'left',
    margin: '5px 5px',
    height: '100px',
    background: '#eee',
    borderRadius: '10px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    zIndex: '90',
    overflow: 'hidden',
  };

  return (
    <div>
      <Carousel {...setting}>
        <img src={img1} alt="test" />
        <img src={img2} alt="test" />
        <img src={img3} alt="test" />
        <img src={img4} alt="test" />
        <img src={img5} alt="test" />
        <img src={img6} alt="test" />
        <img src={img7} alt="test" />
      </Carousel>

      <h3>学习安排 <span style={moreStyles}>更多</span></h3>
      <div style={wrapper}>
        <img src={img1} />
        <Ribbon text="test" />
      </div>
      <div style={wrapper}>
        <img src={img2} />
        <Ribbon text="test" />
      </div>
      <div style={wrapper}>
        <img src={img3} />
        <Ribbon text="test" />
      </div>
      <div style={wrapper}>
        <img src={img4} />
        <Ribbon text="test" />
      </div>

      <h1>选修课 <span style={moreStyles}>更多</span></h1>

      <div style={wrapper}>
        <img src={img5} />
        <Ribbon text="test" />
      </div>
      <div style={wrapper}>
        <img src={img6} />
        <Ribbon text="test" />
      </div>
      <div style={wrapper}>
        <img src={img7} />
        <Ribbon text="test" />
      </div>
      <div style={wrapper}>
        <img src={img2} />
        <Ribbon text="test" />
      </div>

    </div>
  );
}

export default ComponentDescription;
