import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<Link to="/" style={ linkStyle }>Home</Link>
			{' '}|{' '}
			<Link to="items" style={ linkStyle }>Items</Link>
		</div>
	);
}

const linkStyle = {
	color: '#fff',
	textDecoration: 'none'
}

export default Navbar;