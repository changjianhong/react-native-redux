import urls from './base/baseUrls';

urls.addUrl({
  getUsers: '/users',
  getUser: '/users/:name'
}, 'users')

export default urls;
