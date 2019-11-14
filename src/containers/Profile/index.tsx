import React from 'react'
import ProfileImg from '../../components/ContainerImg'
import Button from '../../components/Button'
import Card from '../../components/Card'

const style = {
	container: {
		padding: '15px',
	},
	row: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '10px',
	},
}

export default class Profile extends React.Component {
	public render() {
		return (
			<div style={style.container}>
				<div style={style.row}>
					<ProfileImg />
					<Button>Agregar</Button>
				</div>
				<div style={style.row}>
					<Card><img src="https://placekitten.com/g/100/100" /></Card>
					<Card><img src="https://placekitten.com/g/100/100" /></Card>
					<Card><img src="https://placekitten.com/g/100/100" /></Card>
				</div>
				<div style={style.row}>
					<Card><img src="https://placekitten.com/g/100/100" /></Card>
					<Card><img src="https://placekitten.com/g/100/100" /></Card>
					<Card><img src="https://placekitten.com/g/100/100" /></Card>
				</div>
			</div>
		)
	}
}
