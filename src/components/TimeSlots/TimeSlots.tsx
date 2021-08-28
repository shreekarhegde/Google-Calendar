import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import { times } from '../../utils';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	blackBorder: {
		border: '1px solid rgba(224, 224, 224, 1)',
	},
	time: {
		width: '45px',
		textAlign: 'center',
	},
});

export const TimeSlots = () => {
	const formattedTime = (time: number) => moment().set('hours', time).format('h a');
	const classes = useStyles();
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
