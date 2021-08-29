import React from 'react';
import { useStyles } from './Event-styles';
import moment from 'moment';

const eventHighlighter = {
	backgroundColor: '#b3e1f7',
	border: '1px solid #81cdf2',
	borderRadius: '4px',
	color: 'white',
	padding: '2px 4px',
	fontSize: '12px',
	zIndex: 1,
	cursor: 'pointer',
} as React.CSSProperties;

export const Event = (props: any) => {
	console.log('props', props);
	const classes = useStyles();
	console.log(classes.eventHighlighter);
	return (
		<div
			style={{
				...eventHighlighter,
			}}
		>
			{props.event.title} <br />
			<span style={{ fontSize: 10 }}>
				{moment(props.event.start).format('hh:mm a')} - {moment(props.event.end).format('hh:mm a')}
			</span>
		</div>
	);
};
