
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { UncontrolledCarousel } from 'reactstrap';



export default function Slide() {

    return (
<UncontrolledCarousel
  items={[
    {
    
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: 'https://picsum.photos/id/127/2200/500'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: 'https://picsum.photos/id/456/2200/500'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: 'https://picsum.photos/id/678/2200/500'
    }
  ]}
 />



    );

}
