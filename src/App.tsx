import * as React from 'react'
import { Route } from 'react-router'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'

class App extends React.Component {
	public render () {
		return (
			<>
				<Route exact path="/" component={Login}/>
				<Route exact path="/register" component={Register}/>
			</>
		)
	}
}

export default App;
