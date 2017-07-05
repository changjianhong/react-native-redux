
class BaseService {

	joinUrl({url, params}) {
		let urlObject = new URL(url);
		if (params) {
			Object.keys(params).forEach(key => urlObject.searchParams.append(key, params[key]));
		}
		return urlObject.href;
	}

	async fetchApi({method, ...obj}) {
		let init = {
			method: method,
		};
		let url = this.joinUrl(obj);
		try {
			let response = await fetch(url, init);
			let data = response.json();
			return data;
		} catch (e) {
			console.log(e);
			return Promise.reject(e);
		}
	}
}

export default BaseService;
