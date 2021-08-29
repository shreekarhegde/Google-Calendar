import { openDB } from 'idb';
import { Calendar } from '../interfaces';
const events: any = [
	{ title: 'Event 1', startTime: '1', endTime: '2', startDate: new Date('09-03-2021'), endDate: new Date('09-03-2021') },
	{ title: 'Event 2', startTime: '10', endTime: '11', startDate: new Date('09-04-2021'), endDate: new Date('09-04-2021') },
	{ title: 'Event 3', startTime: '7', endTime: '8', startDate: new Date('08-29-2021'), endDate: new Date('08-29-2021') },
];

const promiseObj = openDB<Calendar>('Calender', 1, {
	upgrade(db) {
		const calendarStore = db.createObjectStore('event', { keyPath: 'id', autoIncrement: true });
		calendarStore.createIndex('by-date', 'date');
	},
});

(async () => {
	try {
		const resp = await (await promiseObj).getAll('event');
		if (resp.length) return;
		for (const event of events) {
			const data = {
				title: event.title,
				startTime: event.startTime,
				endTime: event.endTime,
				startDate: event.startDate,
				endDate: event.endDate,
			};
			await (await promiseObj).add('event', data);
		}
	} catch (error) {
		console.log('error in indexdb', error);
	}
})();

export async function getAll() {
	return (await promiseObj).getAll('event');
}
