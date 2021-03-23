import React from 'react';
// import CardList from './CardList';
// import SearchBox from './SearchBox';


const Scroll = (props) => {
	return (
		 <div style={{overflow: 'scroll', border: '5px solid black', height: '800px'}}>	
		 	{props.children}
		 </div>
		);	
};


export default Scroll;