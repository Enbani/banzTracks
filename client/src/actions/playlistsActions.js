import axios from 'axios';
import { GET_PLAYLISTS } from './actionTypes.js';

export const addPlaylists = (data) => {
  return {
    type: GET_PLAYLISTS,
    payload: data
  }
};

export const getPlaylists = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/v1/playlists');
      const allPlaylists = response.data.payload;
      dispatch(addPlaylists(allPlaylists));
    } catch(e) {
      console.log(e);
    }
  }
};
