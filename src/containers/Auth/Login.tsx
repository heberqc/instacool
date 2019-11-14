import * as React from 'react'
import { connect } from 'react-redux'

import Card from '../../components/Card'
import Container from '../../components/Container'
import Title from '../../components/Title'
import LoginForm from '../../components/LoginForm'

import { login as loginThunk, ILogin} from '../../ducks/Users'
import { ThunkDispatch } from 'redux-thunk'

interface ILoginProps {
	login: (a: ILogin) => void,
}

class Login extends React.Component<ILoginProps> {
	public render() {
		const { login } = this.props
		return (
			<Container center>
				<Card>
					<Title>Iniciar Sesión</Title>
					<LoginForm onSubmit={login} />
				</Card>
			</Container>
		)
	}
}

const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch :ThunkDispatch<any, any, any>) => ({
	login: (payload: any) => dispatch(loginThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
