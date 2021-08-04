import React from 'react';
import PropTypes from 'prop-types';
import { Carousel as BCarousel } from 'react-bootstrap';

const { Item, Caption } = BCarousel;

const Carousel = ({ data, maxHeight, minHeight, ...props }) => {
  return (
    <BCarousel {...props}>
      {
        data.map(item => (
          <Item style={{ maxHeight, minHeight }} key={item.id}>
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.id}
            />
            <Caption>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
            </Caption>
          </Item>
        ))
      }
    </BCarousel>
  );
};

Carousel.defaultProps = {
  data: [],
  maxHeight: undefined,
  minHeight: undefined,
  fade: false,
  interval: null,
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(Object),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fade: PropTypes.bool,
  interval: PropTypes.number
};

export default Carousel;
export { Carousel };