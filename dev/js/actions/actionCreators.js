// import FloorsApi from '../api/floorsApi'

import * as types from './actionTypes';
import axios from 'axios';

// Import api
import * as api from '../api/all-api'

// Import reques actions handle...
import * as handle from './request-handle-action'

//Import week-helper module
// import * as WeekHelper from '../helpers/week-helper'

// Actions for getting employees...
export function getAllEmployee(url = api.GET_EMPLOYEE_DETAILS) {
	return function (dispatch) {
		dispatch(handle.requestData(types.REQ_DATA_AT_GET_ALL_EMPLOYEE));
		return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function (response) {
				console.log(response.data)
				dispatch(handle.receiveData(types.RECV_DATA_AT_GET_ALL_EMPLOYEE, response.data));
			})
			.catch(function (response) {
				dispatch(handle.receiveError(types.RECV_ERROR_AT_GET_ALL_EMPLOYEE, response.data));
			})
	}
}
// Actions for getting projects...
export function getAllProject(url = api.GET_PROJECT_DETAILS) {
	return function (dispatch) {
		dispatch(handle.requestData(types.REQ_DATA_AT_GET_ALL_PROJECT));
		return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function (response) {
				console.log(response.data)
				dispatch(handle.receiveData(types.RECV_DATA_AT_GET_ALL_PROJECT, response.data));
			})
			.catch(function (response) {
				dispatch(handle.receiveError(types.RECV_ERROR_AT_GET_ALL_PROJECT, response.data));
			})
	}
}