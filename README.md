# react-native-redux
基于redux的react-native

- npm install
- react-native run-ios

#### question :
- no bundle URL present

```
运行 start packager
```

- 不开启远程调试 网络请求失败

```
开启远程js debug就不会出现。。。。。
error：
[ReferenceError: Can't find variable: URL]
line: 51729,
column: 27,
sourceURL: 'http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false'

出现问题的地方在 配置 fetch props时，用下边这种方法，获取url在拼接params
let urlObject = new URL(url);
Object.keys(params).forEach(key => urlObject.searchParams.append(key, params[key]));
fetch(url, init);

改成
let init = {method: method, body: params};
let request = new Request(url, init);

```
