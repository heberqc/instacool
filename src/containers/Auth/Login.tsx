import * as React from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Title from '../../components/Title'
import LoginForm from '../../components/LoginForm'

export default class Login extends React.Component {
	public render() {
		return (
			<Container center>
				<Card>
					<Title>Iniciar Sesión</Title>
					<LoginForm />
				</Card>
			</Container>
		)
	}
}
