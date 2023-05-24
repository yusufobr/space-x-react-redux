import React from 'react';
import { useSelector } from 'react-redux';

function Myprofile() {
  const { missions } = useSelector((state) => state.missions);
  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  return (
    <div className="container px-4 grid grid-cols-2 gap-4 mx-auto mt-8 text-left">
      <div>
        <span className="text-2xl font-semibold">My Missions</span>
        <ul className="mt-4">
          {reservedMissions.length > 0 ? (
            reservedMissions.map((item) => (
              <li key={item.mission_id} className="text-xl h-12 border p-2">
                {item.mission_name}
              </li>
            ))
          ) : (
            <li>No Mission</li>
          )}
        </ul>
      </div>
      <div>
        <span className="text-2xl font-semibold">My Rockets</span>
        <ul className="mt-4">
          <li className="text-xl h-12 border p-2">test</li>
        </ul>
      </div>
    </div>
  );
}

export default Myprofile;
