import * as types from '../actions/actionTypes';

function projects(state = {
	isLoading: false,
	data: [],
	error: false}
    , action = null) {
        switch(action.type) {
            case types.RECV_ERROR_AT_GET_ALL_PROJECT:
                console.log('Getting Errors...',action.data)
                return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
            case types.RECV_DATA_AT_GET_ALL_PROJECT:
                console.log('assync data',action.data)
                return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
            case types.REQ_DATA_AT_GET_ALL_PROJECT:
                console.log('Requesting Assync')
                return Object.assign({}, state, {isLoading: true, error: false });
            default:
                return state;
        }
    }

export default projects