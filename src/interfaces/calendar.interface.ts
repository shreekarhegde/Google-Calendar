import { DBSchema } from 'idb';

export interface Calendar extends DBSchema {
	// @ts-ignore
	event: {
		id: number;
		title: string;
		startTime: number;
		endTime: number;
		startDate: any;
		endDate: any;
		indexes: { 'by-date': string };
	};
}
