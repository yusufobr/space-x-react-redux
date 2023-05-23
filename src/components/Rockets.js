import React from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <div className="container mx-auto flex flex-col gap-6 mt-8">
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id} className="flex gap-6">
          <img width={250} src={rocket.flickr_images} alt="flickr" />
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2">{rocket.rocket_name}</h3>
            <p>{rocket.description}</p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Rockets;
