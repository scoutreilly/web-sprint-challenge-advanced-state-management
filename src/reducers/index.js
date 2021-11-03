import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  SET_ERROR,
  FETCH_START,
  ADD_SMURF,
} from "../actions";

// initiallizing state
export const initialState = {
  smurfs: [],
  loading: false,
  error: "",
};

// defining reducer and our actions cases
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, smurfs: action.payload };
    case FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case ADD_SMURF:
      const newSmurf = { ...action.payload, id: Date.now() };
      return { ...state, smurfs: [...state.smurfs, newSmurf] };
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
