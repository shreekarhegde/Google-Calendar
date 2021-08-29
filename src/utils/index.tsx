import moment from 'moment';

/**
 * Generate days data in week, along with name and date
 * @param {date} currentDate 
 * @returns 
 */
export const getAllDaysInTheWeek = (currentDate = moment()) => {
	const weekStart = currentDate.clone().startOf('week');

	const days = Array.from(Array(7))
		.map((day, index) => index)
		.map((day) => moment(weekStart).add(day, 'days').set('minutes', 0).set('seconds', 0))
		.map((momentObj) => ({
			date: momentObj.date(),
			dateStamp: +momentObj,
			weekDayName: momentObj.format('ddd'),
		}));

	return days;
};

// All the hours in the day
export const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

/**
 * Format time. ex: 2am, 3pm etc
 * @param {string} time 
 * @returns 
 */
export const formattedTime = (time: number) => moment().set('hours', time).format('h a');

/**
 * Check if current time and event time are equal
 * @param {string} time 
 * @param {object} event 
 * @returns {boolean}
 */
export const isTimeEqual = (time: number, event: any = {}) => formattedTime(time) === formattedTime(event.startTime) || false;

/**
 * Check if current date and event date are equal
 * @param {date} colDate 
 * @param {date} eventDate 
 * @returns 
 */
export const isDateEqual = (colDate: Date, eventDate: Date) =>
	moment(new Date(colDate.setHours(0, 0, 0))).isSame(new Date(eventDate), 'date') || false;

/**
 * Generate height based on duration for styling of event
 * @param {object} event 
 * @returns {string}
 */
export const generateHeight = (event: any) => {
	let start = parseInt(event.startTime);
	let end = parseInt(event.endTime);
	let height = (end - start) * 100;
	return `${height + '%'}`;
};