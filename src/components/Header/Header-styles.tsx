import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
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
		ml10: {
			marginLeft: '10px',
		},
		ml20: {
			marginLeft: '20px',
		},
		p5: {
			padding: '5px !important',
		},
		fontFa: {
			fontFamily: `${'Product Sans'}`,
			fontSize: '30px',
		},
		border: {
			border: '0px',
		},
	})
);
