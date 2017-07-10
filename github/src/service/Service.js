import BaseService from './base/baseService';
import urls from './urls';

export default class Service extends BaseService {
	getUsers() {
		return super.fetchApi({method:'GET', url:urls.users.getUsers});
	}

	getUser(path) {
		return super.fetchApi({method:'GET', url:urls.users.getUser, path:path});
	}

	getReactNativeRepos() {
		return this.searchRepos('react-native');
	}

	searchRepos(key) {
		return super.fetchApi({method:'GET', url:urls.repos.getRepos, params:{q:key}})
	}
}
