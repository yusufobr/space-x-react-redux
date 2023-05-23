import React from 'react';
import { useSelector } from 'react-redux';
import './Missions.css';

function Missions() {
  const { missions } = useSelector((state) => state.missions);
  console.log(missions, 'missions');

  return (
    <div className="container mx-auto">
      <table className="text-left">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={mission.mission_id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="text-lg font-bold w-[12.5%]">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="w-[12.5%]">...</td>
              <td className="w-[12.5%]">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
