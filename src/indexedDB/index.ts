import { openDB } from 'idb';
import moment from 'moment';
import { Calendar } from '../interfaces';
import { generateHeight } from '../utils';

//Events to be stored in indexedDB
let events: any = [
	{ title: 'Event 1', startTime: '1', endTime: '2', startDate: new Date('09-03-2021'), endDate: new Date('09-03-2021') },
	{ title: 'Event 2', startTime: '10', endTime: '11', startDate: new Date('09-04-2021'), endDate: new Date('09-04-2021') },
	{ title: 'Event 3', startTime: '7', endTime: '8', startDate: new Date('08-29-2021'), endDate: new Date('08-29-2021') },
	{ title: 'Event 4', startTime: '7', endTime: '9', startDate: new Date('08-29-2021'), endDate: new Date('08-29-2021') },
];

//copying the event
let copyEvents = [...events];

//If two events have same date and time, increase left margin by 10%
for (let i = 0; i < events.length; i++) {
	let date = events[i].startDate;
	let left = 0;
	copyEvents[i].left = copyEvents[i].left ? copyEvents[i].left : left;
	for (let j = i + 1; j < events.length; j++) {
		if (moment(new Date(date.setHours(0, 0, 0))).isSame(new Date(events[j].startDate), 'date')) {
			left = left + 10;
			copyEvents[j].left = left;
		}
	}
}

//Create promise object to write into indexedDB
const promiseObj = openDB<Calendar>('Calender', 1, {
	upgrade(db) {
		const calendarStore = db.createObjectStore('event', { keyPath: 'id', autoIncrement: true });
		calendarStore.createIndex('by-date', 'date');
	},
});

//Modify data to be stored into indexedDB and store them
(async () => {
	try {
		const response = await (await promiseObj).getAll('event');
		if (response.length) return;
		for (const event of copyEvents) {
			const data = {
				title: event.title,
				startTime: event.startTime,
				endTime: event.endTime,
				startDate: event.startDate,
				endDate: event.endDate,
				left: `${event.left}%`,
				height: generateHeight(event),
			};
			await (await promiseObj).add('event', data);
		}
	} catch (error) {
		console.log('error in indexdb', error);
	}
})();

//Get all stored events
export async function getAll() {
	return (await promiseObj).getAll('event');
}
