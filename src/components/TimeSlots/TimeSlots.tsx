import TableBody from '@material-ui/core/TableBody';
import { times } from '../../utils';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import TableCell from '@material-ui/core/TableCell';
import { useStyles } from '../TimeSlots/TimeSlots-styles';

export const TimeSlots = () => {
	const classes = useStyles();
	const formattedTime = (time: number) => moment().set('hours', time).format('h a');
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
					{[...Array(7)]
						.map((_, i) => i + 1)
						.map((el) => (
							<TableCell key={el.toString()} className={classes.blackBorder}></TableCell>
						))}
				</TableRow>
			))}
		</TableBody>
	);
};
