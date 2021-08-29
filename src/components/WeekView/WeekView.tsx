import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import WeekHeader from '../WeekHeader/WeekHeader';
import { TimeSlots } from '../TimeSlots/TimeSlots';
import { WeekDays } from '../../interfaces';

export const WeekView = (props: WeekDays) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<WeekHeader weekDays={props.weekDays}></WeekHeader>
				<TimeSlots weekDays={props.weekDays} />
			</Table>
		</TableContainer>
	);
};
