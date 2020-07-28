/**
 * Post request to AJAX endpoint
 *
 * @param {*} data Data to post
 * @param {*} endpoint AJAX endpoint
 * @returns {Promise}
 */
export const post = async (data, endpoint) => {
	const options = {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	const response = await fetch(endpoint, options);

	return response.json();
};

/**
 * Get request to AJAX endpoint
 *
 * @param {*} data Data to send
 * @param {*} endpoint AJAX endpoint
 * @returns {Promise}
 */
export const get = async (data, endpoint) => {
	let endpointWithParams = `${endpoint}?`;
	if (data && Object.keys(data).length) {
		endpointWithParams += Object.keys(data)
			.map((key) => `${key}=${data[key]}`)
			.join('&');
	}
	const response = await fetch(endpointWithParams);

	return response.json();
};
