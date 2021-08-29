import React from 'react';
import { useStyles } from './Event-styles';
import moment from 'moment';

const eventHighlighter = {
	backgroundColor: 'rgb(3, 155, 229)',
	borderRadius: '4px',
	color: 'white',
	padding: '2px 4px',
	fontSize: '12px',
	zIndex: 1,
	cursor: 'pointer',
	display: 'inherit',
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
			{props.event && props.event.start && (
				<span style={{ fontSize: 10 }}>
					{moment(props.event.start).format('hh:mm a')} - {moment(props.event.end).format('hh:mm a')}
				</span>
			)}
		</div>
	);
};
