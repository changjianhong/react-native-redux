import React from 'react';

class Component extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return this.getTemplate();
	}

	getTemplate(tmp) {
		return tmp;
	}
 	
}
