import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	eventHighlighter: {
		backgroundColor: 'rgb(3, 155, 229)',
		borderRadius: '4px',
		color: 'white',
		padding: '2px 4px',
		fontSize: '12px',
		zIndex: 1,
		cursor: 'pointer',
		display: 'inherit',
		width: 'inherit',
	},
	flexCol: {
		display: 'flex',
		flexDirection: 'column',
	},
});
