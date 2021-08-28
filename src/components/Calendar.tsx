import React from 'react';
import { Header } from './Header/Header';
import { WeekView } from './WeekView/WeekView';

export const Calendar = () => {
	return (
		<React.Fragment>
			<Header />
			<WeekView />
		</React.Fragment>
	);
};
