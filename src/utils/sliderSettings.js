import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'


export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  speed: 500,
  vertical: false,
  verticalSwiping: false,
  // nextArrow: (
  //   <button type="button">
  //     <FontAwesomeIcon
  //       icon={faChevronDown}
  //       color="blue"
  //     />
  //   </button>
  // ),
  // prevArrow: (
  //   <button type="button">
  //     <FontAwesomeIcon
  //       icon={faChevronUp}
  //       color="blue"
  //     />
  //   </button>
  // ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
// export const sliderSettings = {
//   dots: false,
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   vertical: true,
//   verticalSwiping: true,
//   nextArrow: (
//     <button type="button">
//       <FontAwesomeIcon
//         icon={faChevronDown}
//         color="blue"
//       />
//     </button>
//   ),
//   prevArrow: (
//     <button type="button">
//       <FontAwesomeIcon
//         icon={faChevronUp}
//         color="blue"
//       />
//     </button>
//   ),
// }