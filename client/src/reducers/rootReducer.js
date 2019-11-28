import { combineReducers } from 'redux';
import playlistsReducer from './playlistsReducer';

const rootReducer = combineReducers({
  playlists: playlistsReducer
});

export default rootReducer;
