import * as React from 'react'
import { Route } from 'react-router'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'
import services from './services'
import { History } from 'history'

interface IAppProps {
	history: any,
}

class App extends React.Component<IAppProps> {

	public state = {
		loading: true,
	}

	public componentDidMount() {
		const { auth } = services
		auth.onAuthStateChanged(user => {
			console.log('user:', user)
			if (user) {
				if (['/', '/register'].indexOf(window.location.pathname) > -1) {
					console.log('this.props:', this.props)
					const { history } = this.props
					history.push('/app/newsfeed')
				}
			} else {

			}
			console.log('user:', user)
			this.setState({
				loading: false,
			})
		})
	}

	public render () {
		const { loading } = this.state
		return (
			loading ? 'loading' : <>
				<Route exact path="/" component={Login}/>
				<Route exact path="/register" component={Register}/>
				<Route path="/app" component={Navbar}/>
				<Route exact path="/app/newsfeed" component={NewsFeed}/>
				<Route exact path="/app/profile" component={Profile}/>
			</>
		)
	}
}

export default App;
