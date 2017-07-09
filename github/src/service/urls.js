import urls from './base/baseUrls';

urls.addUrl({
  getUsers: '/users',
  getUser: '/users/:name'
}, 'users');

urls.addUrl({
  getRepos: '/search/repositories',
}, 'repos');

export default urls;
