import React, { Component } from 'react';
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}	
	}
	//React 16 New Life cycle method introduced

	componentDidCatch(error, info) {
			this.setState({ hasError: true });
	}

	render() { 
		if (this.state.hasError) {
 			return <h1>Ooops. That is not good</h1>;
		} 
		return this.props.children;
		} 

}

export default ErrorBoundary;