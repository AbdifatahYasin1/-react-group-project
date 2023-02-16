import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets.rockets);

  const filteredMissions = missions.filter((mission) => mission.reserved);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div style={{ display: 'flex', padding: '20px 60px', gap: '25px' }}>
      <div style={{ width: '100%' }}>
        <h3>
          My Missions
        </h3>
        <Table bordered>
          <tbody>
            {filteredMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div style={{ width: '100%' }}>
        <h3>My Rockets</h3>
        <Table bordered>
          <tbody>
            {filteredRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Myprofile;
