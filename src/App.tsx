import * as React from 'react'
import { Route } from 'react-router'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed'
import Navbar from './components/Navbar'

class App extends React.Component {
	public render () {
		return (
			<>
				<Route exact path="/" component={Login}/>
				<Route exact path="/register" component={Register}/>
				<Route path="/app" component={Navbar}/>
				<Route exact path="/app/newsfeed" component={NewsFeed}/>
			</>
		)
	}
}

export default App;
