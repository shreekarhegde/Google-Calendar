import moment from 'moment';
import React, { useState } from 'react';
import { getAllDaysInTheWeek } from '../utils';
import { Header } from './Header/Header';
import { WeekView } from './WeekView/WeekView';

export const Calendar = () => {
	const [startDate, setStartDate] = useState(+moment());
	const [weekDays, setWeekDays] = useState(getAllDaysInTheWeek());

	/**
	 * Sets next week days in the state
	 */
	const goToNextWeek = () => {
		const dateAfter7Days = moment(startDate).add(7, 'days');
		setStartDate(+dateAfter7Days);
		setWeekDays(getAllDaysInTheWeek(dateAfter7Days));
	};

	/**
	 * Sets previous week days in the state
	 */
	const goToPreviousWeek = () => {
		const dateBefore7Days = moment(startDate).subtract(7, 'days');
		setStartDate(+dateBefore7Days);
		setWeekDays(getAllDaysInTheWeek(dateBefore7Days));
	};

	return (
		<React.Fragment>
			<Header goToPreviousWeek={goToPreviousWeek} goToNextWeek={goToNextWeek} />
			<WeekView weekDays={weekDays} />
		</React.Fragment>
	);
};
