import ActionTypes from '../constants/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    searchText : '',
    searchResult : {},
    selectedSong : {},
    songAudioLink : ''
});

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SEARCH_TEXT:
      return state.set('searchText',action.payload.searchText);
    case ActionTypes.RECEIVE_SEARCH_RESULT_DATA:
      return state.set('searchResult', action.payload);
    case ActionTypes.RECEIVE_SONG_MP3_LINK:
      return state.set('songAudioLink', action.payload.url);
    case ActionTypes.SELECTED_SONG:
      return state.set('selectedSong', action.payload.selectedSong);
    default:
      return state;
  }
}
