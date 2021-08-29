import TableBody from '@material-ui/core/TableBody';
import { formattedTime, isDateEqual, isTimeEqual, times } from '../../utils';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from '../TimeSlots/TimeSlots-styles';
import { useEffect, useState } from 'react';
import { getAll } from '../../indexedDB';
import { WeekDays } from '../../interfaces/weekDay.interface';
import { EventComponent } from '../Event/Event';

export const TimeSlots = (props: WeekDays) => {
	const classes = useStyles();
	const slotClasess = `${classes.slotWidth} ${classes.blackBorder}`;

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
					<TableCell className={classes.time}>
						<span className={classes.timeFormat}>{formattedTime(time)}</span>
					</TableCell>
					{props.weekDays.map((el: any) => (
						<TableCell key={el.dateStamp} className={slotClasess}>
							{events.map((event: any) => {
								return (
									isTimeEqual(time, event) &&
									isDateEqual(new Date(el.dateStamp), new Date(event.startDate)) && (
										<EventComponent key={event.title} event={event} />
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
