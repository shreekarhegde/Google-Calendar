import TableBody from '@material-ui/core/TableBody';
import { formattedTime, isDateEqual, isTimeEqual, times } from '../../utils';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from '../TimeSlots/TimeSlots-styles';
import { Event } from '../Event/Event';

export const TimeSlots = (props: any) => {
	const classes = useStyles();
	let events = [
		{ title: 'random 1', start: 9, end: 10, startDate: new Date(), endDate: '29-08-21' },
		{ title: 'random 2', start: 10, end: 11, startDate: new Date(), endDate: '29-08-21' },
		{ title: 'random 3', start: 10, end: 11, startDate: new Date('08-30-2021'), endDate: '29-08-21' },
		{ title: 'random 4', start: 10, end: 11, startDate: new Date('08-30-2021'), endDate: '29-08-21' },
	];

	return (
		<TableBody>
			<TableRow>
				<TableCell className={classes.borderNone}></TableCell>
				{[...Array(6)]
					.map((_, i) => i + 1)
					.map((el) => (
						<TableCell key={el.toString()} className={classes.blackBorder}></TableCell>
					))}
			</TableRow>
			{times.map((time: any) => (
				<TableRow key={time}>
					<TableCell className={classes.time}>
						<span className={classes.timeFormat}>{formattedTime(time)}</span>
					</TableCell>
					{props.weekDays.map((el: any) => (
						<TableCell key={el.dateStamp} className={classes.blackBorder}>
							{events.map((event) => {
								return (
									isTimeEqual(time, event) &&
									isDateEqual(new Date(el.dateStamp), new Date(event.startDate)) && (
										<Event key={event.title} event={event} />
									)
								);
							})}
						</TableCell>
					))}
				</TableRow>
			))}
		</TableBody>
	);
};
