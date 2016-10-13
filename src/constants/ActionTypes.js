/**
 * Constants are important - they describe what type of action is performed
 * within your app. Combined with the DevTools/logger, you can see how state and subsequently
 * your UI is being affected.
 */

import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  CHANGE_SEARCH_TEXT : null,
  REQUEST_DATA: null,
  RECEIVE_ERROR: null,
  RECEIVE_SEARCH_RESULT_DATA: null,
  RECEIVE_SONG_MP3_LINK : null,
  SELECTED_SONG: null,
  SUBMIT_CLICKED: null
});

export default ActionTypes;
