import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReserve } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  return (
    <div className="container px-4 mx-auto flex flex-col gap-6 mt-8">
      {rockets.map((rocket) => (
        <div key={rocket.rocket_id} className="flex gap-6">
          <img width={250} src={rocket.flickr_images} alt="flickr" />
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2">{rocket.rocket_name}</h3>
            <p className="mb-4">
              {
                rocket.reserved ? (
                  <span className="bg-[#18A2B8] mr-2 text-white text-xs font-semibold capitalize px-2 rounded-md">
                    Reserved
                  </span>
                ) : ''
              }
              {rocket.description}
            </p>
            <button
              type="button"
              className={
                    rocket.reserved
                      ? 'py-1 px-3 rounded border-2 text-gray-500 border-gray-500'
                      : 'py-2 px-3 rounded text-white bg-[#007bff]'
                  }
              id={rocket.rocket_id}
              onClick={() => {
                dispatch(addReserve(rocket.rocket_id));
              }}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Rockets;
