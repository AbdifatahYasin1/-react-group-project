const fetchMissons = 'mission/fetchMissions';
const joinMissions = 'mission/joinMission';
const leaveMissions = 'mission/leaveMission';

const fetchMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missionsData = [];
  data.forEach((mission) => {
    missionsData.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  dispatch({
    type: fetchMissons,
    payload: missionsData,
  });
};

const joinMission = (mission) => ({
  type: joinMissions,
  payload: mission,
});

const leaveMission = (mission) => ({
  type: leaveMissions,
  payload: mission,
});

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case fetchMissons:
      return action.payload;
    case joinMissions:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.mission_id) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
    case leaveMissions:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.mission_id) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });
    default:
      return state;
  }
};

export { fetchMissions, joinMission, leaveMission };
export default missionsReducer;
