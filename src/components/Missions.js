import React from 'react';
import { Table } from 'react-bootstrap';

const missions = [
  {
    mission_id: 'Thaicom',
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: false,
  },
  {
    mission_id: 'Thaicom',
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: true,
  },
  {
    mission_id: 'Thaicom',
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: true,
  },
];

const Missions = () => (
  <div className="container mt-3">
    <Table striped bordered hover>

      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <th className="col-2">{mission.mission_name}</th>
            <td className="col-6">{mission.description}</td>
            <td className="col-2 text-center pt-5">
              {mission.reserved ? (<span className="bg-info text-white rounded-1 p-1">Active Member</span>)
                : (<span className="bg-secondary text-white rounded-1 p-1">NOT A MEMBER</span>)}
            </td>
            <td className="col-2">
              <button type="button" className="btn btn-light border-2 border-secondary">
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>

    </Table>
  </div>
);

export default Missions;
