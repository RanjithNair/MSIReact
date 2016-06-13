import ActionTypes from '../constants/ActionTypes';

function requestData() {
    return {
        type: ActionTypes.REQUEST_DATA,
        payload: null
    };
}

function receiveData(data, ACTION_TYPE) {
    var x = {};

    if (data && data.errorMessage) {
        return {
            type: ActionTypes.RECEIVE_ERROR,
            payload: data
        }
    }

    return {
        type: ACTION_TYPE,
        payload: data
    };
}

function receiveError(err, ACTION_TYPE) {
    console.log(err);
    return {
        type: ACTION_TYPE,
        payload: err,
        error: true
    };
}

export function fetchData(url, ACTION_TYPE) {
    return (dispatch) => {
        dispatch(requestData())

        return fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic '+btoa('admin:infosys123')
                }
            }).then((req) => req.json())
            .then((json) => dispatch(receiveData(json, ACTION_TYPE)))
            .catch((err) => dispatch(receiveError(err, ACTION_TYPE)));
    }
}

export function executeSearch(searchtext) {
    return {
        type: ActionTypes.EXECUTE_SEARCH,
        payload: {
            searchText: searchtext
        }
    };
}

export function changeSearchText(searchText) {
    return {
        type: ActionTypes.CHANGE_SEARCH_TEXT,
        payload: {
            searchText: searchText
        }
    };
}

export function selectedSong(song) {
    return {
        type: ActionTypes.SELECTED_SONG,
        payload: {
            selectedSong: song
        }
    };
}
