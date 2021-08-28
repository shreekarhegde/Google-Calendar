import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CardContent } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { useStyles } from './Header-styles';

export const Header = () => {
	const classes = useStyles();
	const toolBarClasses = `${classes.bgWhite} ${classes.textcolor}`;
	const cardClasses = `${classes.pointer} ${classes.ml20} `;
	const calendarClasses = `${classes.fontFa} ${classes.ml10} ${classes.border}`;
	const iconClasses = `${classes.ml20} ${classes.pointer}`;
	const rootClasses = `${classes.root} ${classes.borderBottom}`;
	return (
		<div className={rootClasses}>
			<AppBar position='static'>
				<Toolbar className={toolBarClasses}>
					<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<img
						className='gb_tc gb_6d'
						src='//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_28_2x.png#'
						alt=''
						aria-hidden='true'
						style={{ width: '40px', height: '40px' }}
					/>
					<Card variant='outlined' className={calendarClasses}>
						<CardContent className={classes.p5}>Calendar</CardContent>
					</Card>
					<Card variant='outlined' className={cardClasses}>
						<CardContent className={classes.p5}>Today</CardContent>
					</Card>
					<ChevronLeftIcon className={iconClasses} />
					<ChevronRightIcon className={classes.pointer} />
				</Toolbar>
			</AppBar>
		</div>
	);
};
