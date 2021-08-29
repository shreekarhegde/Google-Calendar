import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	eventHighlighter: {
		position: 'absolute',
		backgroundColor: '#b3e1f7',
		border: '1px solid #81cdf2',
		borderRadius: '4px',
		color: 'white',
		padding: '2px 4px',
		fontSize: '12px',
		zIndex: 1,
		cursor: 'pointer',
	},
});
