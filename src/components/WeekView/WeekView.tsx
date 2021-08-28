import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import WeekHeader from '../WeekHeader/WeekHeader';
import { TimeSlots } from '../TimeSlots/TimeSlots';

export const WeekView = () => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<WeekHeader></WeekHeader>
				<TimeSlots />
			</Table>
		</TableContainer>
	);
};
