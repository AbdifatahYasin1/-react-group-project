import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rockets';
import RocketItem from '../RocketItem/RocketItem';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div style={{
      padding: '20px 50px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}
    >
      {rockets.map((rocket) => (
        <RocketItem
          key={rocket.id}
          description={rocket.description}
          name={rocket.name}
          image={rocket.flickr_images[0]}
          reserved={rocket.reserved}
          id={rocket.id}
        />
      ))}
    </div>
  );
};

export default Rockets;
