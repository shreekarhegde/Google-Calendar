import TableBody from '@material-ui/core/TableBody';
import { formattedTime, isDateEqual, isTimeEqual, times } from '../../utils';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from '../TimeSlots/TimeSlots-styles';
import { Event } from '../Event/Event';

export const TimeSlots = (props: any) => {
	const classes = useStyles();
	let events: any = [
		{ title: 'random 1', start: 10, end: 11, startDate: new Date('09-03-2021'), endDate: '29-08-21' },
		{ title: 'random 2', start: 10, end: 11, startDate: new Date('09-04-2021'), endDate: '29-08-21' },
		{ title: 'random 3', start: 10, end: 11, startDate: new Date('08-29-2021'), endDate: '29-08-21' },
		{ title: 'random 4', start: 10, end: 11, startDate: new Date('08-30-2021'), endDate: '29-08-21' },
		{ title: 'random 5', start: 10, end: 11, startDate: new Date('08-30-2021'), endDate: '29-08-21' },
		{ title: 'random 6', start: 10, end: 11, startDate: new Date('08-31-2021'), endDate: '29-08-21' },
		{ title: 'random 7', start: 10, end: 11, startDate: new Date('09-01-2021'), endDate: '29-08-21' },
		{ title: 'random 8', start: 10, end: 11, startDate: new Date('09-02-2021'), endDate: '29-08-21' },
		{ title: 'random 9', start: 10, end: 11, startDate: new Date('09-15-2021'), endDate: '29-08-21' },
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
					<TableCell className={classes.time} style={{ width: '45px' }}>
						<span className={classes.timeFormat}>{formattedTime(time)}</span>
					</TableCell>
					{props.weekDays.map((el: any) => (
						<TableCell key={el.dateStamp} className={classes.blackBorder} style={{ width: '150px' }}>
							{events.map((event: any) => {
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
