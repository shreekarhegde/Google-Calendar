import TableBody from '@material-ui/core/TableBody';
import { times } from '../../utils';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from '../TimeSlots/TimeSlots-styles';
import { Event } from '../Event/Event';

export const TimeSlots = (props: any) => {
	const classes = useStyles();
	let event = { title: 'random', start: 9, end: 10, startDate: new Date(), endDate: '29-08-21' };
	const formattedTime = (time: number) => moment().set('hours', time).format('h a');
	const isTimeEqual = (time: number, event: any) => formattedTime(time) === formattedTime(event.start);
	const isDateEqual = (colDate: Date, eventDate: Date) => {
		return moment(new Date(colDate.setHours(0, 0, 0))).isSame(new Date(eventDate), 'date');
	};
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
							{isTimeEqual(time, event) && isDateEqual(new Date(), new Date(el.dateStamp)) && <Event event={event} />}
						</TableCell>
					))}
				</TableRow>
			))}
		</TableBody>
	);
};
