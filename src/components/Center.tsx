import * as React from 'react'

const style = {
	width: '100%',
	textAlign: 'center',
} as React.CSSProperties

export default class Card extends React.Component {
	public render() {
		return (
			<div {...this.props} style={style} />
		)
	}
}
