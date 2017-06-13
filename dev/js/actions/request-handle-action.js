//Api Common Functions For Request Handling...
export function requestData(type) {
	return { type }
};

export function receiveData(type, payload) {
	return {
		type,
		data: payload
	}
};

export function receiveError(type, payload) {
	return {
		type,
		data: payload
	}
};


// Action Dispatch For Setting New Week
export function dateUpdated(type, payload) {
	return {
		type,
		data: payload
	}
}
// Action Dispatch For Selecting Room
export function roomSelected(type, payload) {
	return {
		type,
		data: payload
	}
}