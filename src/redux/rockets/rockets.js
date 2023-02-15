const RESERVEROCKET = 'rocket/RESERVEROCKET';
const CANCELROCKETRESERVATION = 'rocket/CANCELROCKETRESERVATION';

const initialState = {
  rockets: [],
};

const rockets = (state = initialState, {
  type, payload,
}) => {
  switch (type) {
    case RESERVEROCKET:
      return {
        ...state,
        rockets: payload,
      };
    case CANCELROCKETRESERVATION:
      return {
        ...state,
        rockets: payload,
      };
    default:
      return state;
  }
};

export default rockets;
