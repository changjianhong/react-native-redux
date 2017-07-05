const host = "http://api.github.com";

const addUrl = (urls, groupName) => {
	if (urlObject[groupName]) {
		return;
	}

	Object.keys(urls).forEach((key) => {
		let value = urls[key];
		if (value) {
			urls[key] = host + value;
		}
	});
	urlObject[groupName] = urls;
};

let urlObject = {
	addUrl,
};

export default urlObject;
