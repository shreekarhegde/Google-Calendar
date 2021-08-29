import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	eventHighlighter: {
		backgroundColor: 'rgb(3, 155, 229)',
		borderRadius: '4px',
		color: 'white',
		padding: '0px 2px',
		fontSize: '12px',
		zIndex: 1,
		cursor: 'pointer',
		display: 'inherit',
		width: 'inherit',
		border: '1px solid white',
		position: 'absolute',
		top: '0px',
	},
	flexCol: {
		display: 'flex',
		flexDirection: 'column',
	},
	font: {
		fontSize: 10,
	},
});
