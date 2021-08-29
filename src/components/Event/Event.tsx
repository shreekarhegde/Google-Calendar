import React from 'react';
import { useStyles } from './Event-styles';
import { formattedTime } from '../../utils';

const eventHighlighter = {
	backgroundColor: 'rgb(3, 155, 229)',
	borderRadius: '4px',
	color: 'white',
	padding: '2px 4px',
	fontSize: '12px',
	zIndex: 1,
	cursor: 'pointer',
	display: 'inherit',
	width: 'inherit',
} as React.CSSProperties;

export const Event = (props: any) => {
	console.log('props', props);
	const classes = useStyles();
	console.log(classes.eventHighlighter);
	return (
		<div
			style={{
				...eventHighlighter,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			{props.event.title} <br />
			{props.event && props.event.startTime && (
				<span style={{ fontSize: 10 }}>
					{formattedTime(props.event.startTime)} - {formattedTime(props.event.endTime)}
				</span>
			)}
		</div>
	);
};
