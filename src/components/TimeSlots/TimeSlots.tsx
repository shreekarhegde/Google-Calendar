import React from 'react';
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
			{times.map((time: any) => (
				<TableRow key={time}>
					<TableCell className={classes.time}>{formattedTime(time)}</TableCell>
					<TableCell className={classes.blackBorder}></TableCell>
					<TableCell className={classes.blackBorder}></TableCell>
					<TableCell className={classes.blackBorder}></TableCell>
					<TableCell className={classes.blackBorder}></TableCell>
					<TableCell className={classes.blackBorder}></TableCell>
					<TableCell className={classes.blackBorder}></TableCell>
					<TableCell className={classes.blackBorder}></TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};
