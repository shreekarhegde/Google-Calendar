import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { CardContent } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { useStyles } from './Header-styles';

export const Header = (props: any) => {
	const classes = useStyles();
	const toolBarClasses = `${classes.bgWhite} ${classes.textcolor}`;
	const cardClasses = `${classes.pointer} ${classes.ml20} `;
	const calendarClasses = `${classes.fontFa} ${classes.ml10} ${classes.border}`;
	const iconClasses = `${classes.ml20} ${classes.pointer}`;
	const rootClasses = `${classes.root} ${classes.borderBottom}`;
	const month = props.month;

	return (
		<div className={rootClasses}>
			<AppBar position='static'>
				<Toolbar className={toolBarClasses}>
					<img
						className={`${'gb_tc gb_6d'} ${classes.img}`}
						src='//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_28_2x.png#'
						alt=''
						aria-hidden='true'
					/>
					<Card variant='outlined' className={calendarClasses}>
						<CardContent className={classes.p7}>Calendar</CardContent>
					</Card>
					<Card variant='outlined' className={cardClasses}>
						<CardContent className={classes.p7} onClick={props.reset}>
							Today
						</CardContent>
					</Card>
					<ChevronLeftIcon className={iconClasses} onClick={props.goToPreviousWeek} />
					<ChevronRightIcon className={classes.pointer} onClick={props.goToNextWeek} />
					<h2 className={classes.p7}>{month}</h2>
				</Toolbar>
			</AppBar>
		</div>
	);
};
