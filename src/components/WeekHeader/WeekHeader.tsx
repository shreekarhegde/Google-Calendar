import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getAllDaysInTheWeek, times } from '../../utils';
import moment from 'moment';

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
	pt0: {
		paddingTop: '0px',
	},
	date: {
		fontSize: '26px',
		color: '#70757a',
		marginTop: '10px',
	},
	mt5px: {
		marginTop: '5px',
	},
	time: {
		color: '#70757a',
		width: '10px',
	},
});

const WeekHeader = () => {
	const classes = useStyles();
	const daysInWeek = getAllDaysInTheWeek();
	const formattedTime = (time: number) => moment().set('hours', time).format('h a');
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						{daysInWeek.map((day: Day) => (
							<TableCell key={day.date} className={classes.textCenter}>
								<div>{day.weekDayName}</div>
								<div className={classes.date}>{day.date}</div>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{times.map((time: any) => (
						<TableRow key={time}>
							<TableCell>
								<span>{formattedTime(time)}</span>
							</TableCell>
							<TableCell>
								<div>text</div>
							</TableCell>
							<TableCell>
								<div>text</div>
							</TableCell>
							<TableCell>
								<div>text</div>
							</TableCell>
							<TableCell>
								<div>text</div>
							</TableCell>
							<TableCell>
								<div>text</div>
							</TableCell>
							<TableCell>
								<div>text</div>
							</TableCell>
							<TableCell>
								<div>text</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default WeekHeader;
