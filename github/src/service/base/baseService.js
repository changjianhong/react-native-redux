
class BaseService {

	joinRequest({url, params, method}) {
		let init = {method: method, body: params};
		let request = new Request(url, init);
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
