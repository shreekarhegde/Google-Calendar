import TableBody from '@material-ui/core/TableBody';
import { formattedTime, isDateEqual, isTimeEqual, times } from '../../utils';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from '../TimeSlots/TimeSlots-styles';
import { Event } from '../Event/Event';
import { useEffect, useState } from 'react';
import { getAll } from '../../indexedDB';

export const TimeSlots = (props: any) => {
	const classes = useStyles();

	const [events, setEvents] = useState([]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const events: any = await getAll();
				setEvents(events);
			} catch (e) {
				console.log(e);
			}
		};
		fetchEvents();
	}, []);

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
