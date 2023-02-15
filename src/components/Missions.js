import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missions';
import 'bootstrap/dist/css/bootstrap.min.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const missionsRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const handleJoin = (mission) => {
    dispatch(joinMission(mission));
  };

  const handleLeave = (mission) => {
    dispatch(leaveMission(mission));
  };

  return (
    <div className="missions-container">
      <Table striped bordered hover ref={missionsRef}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
           missions.map((mission) => (
             <tr key={mission.mission_id}>
               <td className="col-2">{mission.mission_name}</td>
               <td className="col-6">{mission.description}</td>
               <td className="col-2 text-center pt-5">
                 {mission.reserved ? (<span className="bg-info text-white rounded-1 p-1">Active Member</span>)
                   : (<span className="bg-secondary text-white rounded-1 p-1">NOT A MEMBER</span>)}
               </td>
               <td className="col-2 text-center pt-5">
                 {!mission.reserved && (
                 <button
                   type="submit"
                   className="btn btn-light border-2 border-secondary"
                   onClick={() => dispatch(handleJoin(mission))}
                 >
                   Join Mission

                 </button>
                 )}
                 {mission.reserved && (
                 <button
                   name="leaveMission"
                   type="submit"
                   className="btn btn-light border-2 border-danger"
                   onClick={() => dispatch(handleLeave(mission))}
                 >
                   Leave Mission

                 </button>
                 )}
               </td>
             </tr>
           ))
}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
