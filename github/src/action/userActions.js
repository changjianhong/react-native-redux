import Action from './baseAction';
import Service from '../service/Service';

export default new Action([
	'getUsers',
	'getUser'
], new Service);
