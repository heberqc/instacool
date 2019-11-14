import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, InjectedFormProps } from 'redux-form'

import Input from './Input'
import Button from './Button'
import Center from './Center'

class LoginForm extends React.Component<InjectedFormProps> {
	public render() {
		const { handleSubmit } = this.props
		return (
			<form onSubmit={handleSubmit}>
				<Input placeholder="Correo" label='Correo' />
				<Input placeholder="Contraseña" label='Contraseña' />
				<Button block={true}>Enviar</Button>
				<Center>
					<Link to="/register">Ir al registro</Link>
				</Center>
			</form>
		)
	}
}

export default reduxForm({
	form: 'login',
})(LoginForm)
