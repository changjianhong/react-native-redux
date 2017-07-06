
class BaseService {

	joinRequest({url, params, method, path}) {
		let init = {method: method, body: params};
		let newUrl = url;
		if (path && typeof path =='object') {
			Object.keys(path).forEach((key) => {
				let placeholder = ':' + key;
				newUrl = newUrl.replace(/:name/, path[key]);
			});
		}
		console.log(newUrl);
		let request = new Request(newUrl, init);
		return request;
	}

	async fetchApi(args) {
		let request = this.joinRequest(args);
		try {
			let response = await fetch(request);
			let data = response.json();
			return data;
		} catch (e) {
			console.log('fdafasfads');
			return Promise.reject(e);
		}
	}
}

export default BaseService;
