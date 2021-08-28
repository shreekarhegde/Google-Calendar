import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Day } from '../../interfaces';
import { useStyles } from './WeekHeader-styles';

const WeekHeader = (props: any) => {
	const classes = useStyles();
	const weekDays = props.weekDays;
	const topCellClasses = `${classes.textCenter} ${classes.borderNone}`;
	return (
		<TableHead>
			<TableRow>
				<TableCell className={topCellClasses}></TableCell>
				{weekDays.map((day: Day) => (
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
