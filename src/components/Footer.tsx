import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'

const styles = {
	button: {
		cursor: 'pointer',
		flex: 1,
		padding: '10px 15px',
		textAlign: 'center',
	},
	footer: {
		backgroundColor: '#eee',
		display: 'flex',
		marginBottom: '-10px',
		marginLeft: '-15px',
		width: 'calc(100% + 30px)',
	},
}

export default class Footer extends React.Component {
	public render() {
		return (
			<div style={styles.footer}>
				<div style={styles.button as React.CSSProperties}><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> Like</div>
				<div style={styles.button as React.CSSProperties}><FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon> Compartir</div>
			</div>
		)
	}
}
