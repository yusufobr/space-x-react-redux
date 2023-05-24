import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReserve } from '../redux/missions/missionsSlice';
import './Missions.css';

function Missions() {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

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
            <tr
              key={mission.mission_id}
              className={index % 2 === 0 ? 'bg-gray-100' : ''}
            >
              <td className="text-lg font-bold w-[12.5%] p-4">
                {mission.mission_name}
              </td>
              <td className="p-3 pb-8">{mission.description}</td>
              <td className="w-[12.5%] text-center">
                <span
                  className={
                    mission.reserved
                      ? 'bg-[#18A2B8] text-white font-semibold uppercase px-2 rounded-md'
                      : 'bg-gray-500 text-white font-semibold uppercase px-2 rounded-md'
                  }
                >
                  {mission.reserved ? 'active member' : 'not a member'}
                </span>
              </td>
              <td className="w-[12.5%] text-center">
                <button
                  type="button"
                  className={
                    mission.reserved
                      ? 'py-1 px-3 rounded border-2 text-red-500 border-red-500'
                      : 'py-1 px-3 rounded border-2 border-black'
                  }
                  id={mission.mission_id}
                  onClick={() => {
                    dispatch(addReserve(mission.mission_id));
                  }}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
