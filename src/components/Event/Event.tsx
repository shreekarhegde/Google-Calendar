import { useStyles } from './Event-styles';
import { formattedTime } from '../../utils';
import { Event } from '../../interfaces';
import { Tooltip } from '@material-ui/core';
import moment from 'moment';

export const EventComponent = (props: { event: Event }) => {
	const classes = useStyles();
	console.log('left: EventComponent', props.event);
	const outerDivClasses = `${classes.eventHighlighter} ${classes.flexCol}`;
	const timings = `${formattedTime(props.event.startTime)} - ${formattedTime(props.event.endTime)} ${moment(props.event.startDate).format(
		'DD-MMMM-YYYY'
	)}`;
	return (
		<Tooltip title={timings}>
			<div className={outerDivClasses} style={{ left: props.event.left }}>
				{props.event.title} <br />
				{props.event && props.event.startTime && (
					<span className={classes.font}>
						{formattedTime(props.event.startTime)} - {formattedTime(props.event.endTime)}
					</span>
				)}
			</div>
		</Tooltip>
	);
};
