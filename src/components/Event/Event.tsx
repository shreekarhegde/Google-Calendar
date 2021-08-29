import { useStyles } from './Event-styles';
import { formattedTime } from '../../utils';
import { Event } from '../../interfaces';

export const EventComponent = (props: { event: Event }) => {
	const classes = useStyles();
	const outerDivClasses = `${classes.eventHighlighter} ${classes.flexCol}`;
	console.log(classes.eventHighlighter);
	return (
		<div className={outerDivClasses}>
			{props.event.title} <br />
			{props.event && props.event.startTime && (
				<span style={{ fontSize: 10 }}>
					{formattedTime(props.event.startTime)} - {formattedTime(props.event.endTime)}
				</span>
			)}
		</div>
	);
};
