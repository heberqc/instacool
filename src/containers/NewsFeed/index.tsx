import * as React from 'react'
import Post from '../../components/Post'
import Container from '../../components/Container'

const style = {
	margin: '0 auto',
}

export default class NewsFeed extends React.Component {
	public render() {
		return (
			<Container>
				<div style={{ margin: '0 auto' }}><Post image="https://placekitten.com/g/300/200" /></div>
				<div style={{ margin: '0 auto' }}><Post image="https://placekitten.com/g/300/200" /></div>
			</Container>
		)
	}
}
