import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { CardContent, Tooltip } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { useStyles } from './Header-styles';
import moment from 'moment';

export const Header = (props: any) => {
	const classes = useStyles();
	const toolBarClasses = `${classes.bgWhite} ${classes.textcolor}`;
	const cardClasses = `${classes.pointer} ${classes.ml20} `;
	const calendarClasses = `${classes.fontFa} ${classes.ml10} ${classes.border}`;
	const iconClasses = `${classes.ml20} ${classes.pointer}`;
	const rootClasses = `${classes.root} ${classes.borderBottom}`;
	const month = props.month;
	const today = `${moment().format('dddd')}, ${new Date().getDate()} ${moment().format('MMMM')}`;
	const src = `//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${new Date().getDate()}_2x.png#'}`;
	return (
		<div className={rootClasses}>
			<AppBar position='static'>
				<Toolbar className={toolBarClasses}>
					<img className={`${'gb_tc gb_6d'} ${classes.img}`} src={src} alt='' aria-hidden='true' />
					<Card variant='outlined' className={calendarClasses}>
						<CardContent className={classes.p7}>Calendar</CardContent>
					</Card>
					<Card variant='outlined' className={cardClasses}>
						<Tooltip title={today}>
							<CardContent className={classes.p7} onClick={props.reset}>
								Today
							</CardContent>
						</Tooltip>
					</Card>
					<Tooltip title='Previous Week'>
						<ChevronLeftIcon className={iconClasses} onClick={props.goToPreviousWeek} />
					</Tooltip>
					<Tooltip title='Next Week'>
						<ChevronRightIcon className={classes.pointer} onClick={props.goToNextWeek} />
					</Tooltip>
					<Card variant='outlined' className={calendarClasses}>
						<CardContent className={classes.p7}>{month}</CardContent>
					</Card>
				</Toolbar>
			</AppBar>
		</div>
	);
};
