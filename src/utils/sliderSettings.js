import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

export const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  nextArrow: (
    <button type="button">
      <FontAwesomeIcon
        icon={faChevronDown}
        color="white"
      />
    </button>
  ),
  prevArrow: (
    <button type="button">
      <FontAwesomeIcon
        icon={faChevronUp}
        color="white"
      />
    </button>
  ),
}