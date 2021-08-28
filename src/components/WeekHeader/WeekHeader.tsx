import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getAllDaysInTheWeek } from '../../utils';

export interface Day {
	date: number;
	dateStamp: number;
	weekDayName: string;
}

const useStyles = makeStyles({
	table: {
		minWidth: 650,
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
						{daysInWeek.map((day) => (
							<TableCell style={{ textAlign: 'center' }}>
								<p>{day.weekDayName}</p>
								<p>{day.date}</p>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{/* {rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell align='right'>{row.calories}</TableCell>
							<TableCell align='right'>{row.fat}</TableCell>
							<TableCell align='right'>{row.carbs}</TableCell>
							<TableCell align='right'>{row.protein}</TableCell>
						</TableRow>
					))} */}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default WeekHeader;
