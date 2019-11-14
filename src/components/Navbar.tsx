import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'

const style = {
	navbar: {
		borderBottom: '1px solid #aaa',
		padding: '10px 15px',
	},
	link: {
		color: '#555',
		textDecoration: 'none',
	},
}

export default class Navbar extends React.Component {
	public render() {
		return (
			<div style={style.navbar as React.CSSProperties}>
				<Link style={style.link} to='app/newsfeed'><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> Instacool</Link>
				<div style={{ float: 'right' }}><Link style={style.link} to='app/profile'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Perfil</Link></div>
			</div>
		)
	}
}
