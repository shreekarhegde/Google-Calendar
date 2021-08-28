import React from 'react';
import { Header } from './Header/Header';
import WeekHeader from './WeekHeader/WeekHeader';

export const Calendar = () => {
	return (
		<React.Fragment>
			<Header />
			<WeekHeader />
		</React.Fragment>
	);
};
