import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rocket/rocketSlice';
import Rocket from './Rocket';

const RenderRockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((store) => store.rockets.rockets);
  const status = useSelector((store) => store.rockets.status);
  const error = useSelector((store) => store.rockets.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  } if (status === 'failed') {
    return <div>{error}</div>;
  }
  return (
    <div>
      <hr className="row" />
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </div>
  );
};

export default RenderRockets;
