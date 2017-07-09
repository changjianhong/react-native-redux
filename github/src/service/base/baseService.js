
const joinQuery = (url, params) => {
	let newUrl = url;

	if (params && typeof params == 'object') {
		Object.keys(params).forEach((key, index) => {
			let sign = index == 0 ? '?' : '&';
			newUrl = newUrl + sign + key + '=' + params[key];
		})
	}
	return newUrl;
}

const joinRequest = ({url, params, method, path}) => {
	method = method || 'GET';
	let newUrl = url;
	if (path && typeof path =='object') {
		Object.keys(path).forEach((key) => {
			let placeholder = ':' + key;
			newUrl = newUrl.replace(/:name/, path[key]);
		});
	}
	let init = {method: method};

	if (method && method == 'GET') {
		newUrl = joinQuery(newUrl, params);
	} else {
		init = Object.assign(init, {body: params});
	}
	console.log(newUrl);
	let request = new Request(newUrl, init);
	return request;
}

class BaseService {
	async fetchApi(args) {
		let request = joinRequest(args);
		try {
			let response = await fetch(request);
			let data = response.json();
			return data;
		} catch (e) {
			console.log(e);
			return Promise.reject(e);
		}
	}
}

export default BaseService;
