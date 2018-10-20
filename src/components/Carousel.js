import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import banner1 from '../assets/imgs/banner1.png';
import banner2 from '../assets/imgs/banner2.png';

const items = [
  {
    src: banner1,
    altText: 'Slide 1',
  },
  {
    src: banner2,
    altText: 'Slide 2',
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;