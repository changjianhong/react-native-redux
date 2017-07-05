import { bindActionCreators } from 'redux';

class Action {
	constructor(actions = [], service) {
		this.actions = actions;
		this.service = service;
		this.getActions();
	}

	getAction(name, service = this.service) {
		let upper = name.replace(/([A-Z])/g, '_$1').toUpperCase();
		let before = upper + '_BEFORE';
		let failure = upper + '_FAILURE'
		this[before] = before;
		this[upper] = upper;
		this[failure] = failure;

		return {
			[name]: (dispatch) => {
				return (...args) => {
					dispatch({type: before, req: args});
					return service[name](...args).then((res) => {
						dispatch({
							type: upper,
							req: args,
							data: res
						});
						return res;
					}).catch((e) => {
						dispatch({
							type: failure,
							error:e,
							req: args
						})
					});
				}
			}
		}
	}

	bindAction(name) {
		let action = this.getAction(name);
		Object.assign(this, action);
	}

	getActions() {
		this.actions.forEach((name) => {
			this.bindAction(name);
		})
	}
}


export default Action;
