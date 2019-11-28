import { GET_PLAYLISTS } from '../actions/actionTypes.js';

const INITIAL_STATE = {
  playlists: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case GET_PLAYLISTS:
      console.log(action);
      return {
        ...state,
        playlists: action.payload
      }
    default:
      return state;
  }
};
