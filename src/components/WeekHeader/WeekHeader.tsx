import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getAllDaysInTheWeek } from '../../utils';
import { useStyles } from './WeekHeader-styles';
export interface Day {
	date: number;
	dateStamp: number;
	weekDayName: string;
}

const WeekHeader = () => {
	const classes = useStyles();
	const daysInWeek = getAllDaysInTheWeek();
	const topCellClasses = `${classes.textCenter} ${classes.borderNone}`;
	return (
		<TableHead>
			<TableRow>
				<TableCell className={topCellClasses}></TableCell>
				{daysInWeek.map((day: Day) => (
					<TableCell key={day.date} className={classes.textCenter}>
						<div>{day.weekDayName}</div>
						<div className={classes.date}>{day.date}</div>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default WeekHeader;
