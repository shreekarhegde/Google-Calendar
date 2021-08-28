import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getAllDaysInTheWeek } from '../../utils';
import { TimeSlots } from '../TimeSlots/TimeSlots';

export interface Day {
	date: number;
	dateStamp: number;
	weekDayName: string;
}

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	textCenter: {
		textAlign: 'center',
	},
	date: {
		fontSize: '26px',
		color: '#70757a',
		marginTop: '10px',
	},
});

const WeekHeader = () => {
	const classes = useStyles();
	const daysInWeek = getAllDaysInTheWeek();
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell className={classes.textCenter}></TableCell>
						{daysInWeek.map((day: Day) => (
							<TableCell key={day.date} className={classes.textCenter}>
								<div>{day.weekDayName}</div>
								<div className={classes.date}>{day.date}</div>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TimeSlots />
			</Table>
		</TableContainer>
	);
};

export default WeekHeader;
