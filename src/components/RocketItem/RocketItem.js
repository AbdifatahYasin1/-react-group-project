import React from 'react';
import { PropTypes } from 'prop-types';

const RocketItem = ({
  image,
  name,
  description,
  reserved,
}) => (
  <div>
    <div>
      <img src={image} alt="rocket" />
    </div>
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      {reserved ? <button type="button">Reserve Rocket</button> : <button type="button">Cancel Reservation</button>}
    </div>
  </div>
);

RocketItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default RocketItem;
