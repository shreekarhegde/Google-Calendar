import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(
	createStyles({
		menuButton: {
			marginRight: '10px',
		},
		root: {
			flexGrow: 1,
		},
		bgWhite: {
			background: 'white',
		},
		textcolor: {
			color: 'black',
		},
		pointer: {
			cursor: 'pointer',
		},
	})
);

export const Header = () => {
	const classes = useStyles();
	const classNames = `${classes.bgWhite} ${classes.textcolor}`;

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar className={classNames}>
					<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<ChevronLeftIcon className={classes.pointer} />
					<ChevronRightIcon className={classes.pointer} />
				</Toolbar>
			</AppBar>
		</div>
	);
};
