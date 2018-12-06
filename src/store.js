import { seedData } from './seed.js';

export const store = {
	state: {
		seedData
	},
	getActiveDay() {
		return this.state.seedData.find(day => day.active);
	},

	getEventObject(dayId, eventDetails) {
		const dayObject = this.state.seedData.find(day => day.id === dayId);

		return dayObject.events.find(event => event.details === eventDetails);
	},

	setActiveDay(dayId) {
		this.state.seedData.map(dayObject => {
			dayObject.id === dayId
				? (dayObject.active = true)
				: (dayObject.active = false);
		});
	},
	submitDayEvent(eventDetails) {
		const activeDay = this.getActiveDay();
		activeDay.events.push({ details: eventDetails, edit: false });
	},

	editEvent(dayId, eventDetails) {
		this.lockAllEventsEdition();
		const eventObject = this.getEventObject(dayId, eventDetails);
		eventObject.edit = true;
	},

	lockAllEventsEdition() {
		this.state.seedData.map(dayObject => {
			dayObject.events.map(event => {
				event.edit = false;
			});
		});
	},

	updateEventDetails(dayId, lastEventDetail, updatedEventDetail) {
		const eventObject = this.getEventObject(dayId, lastEventDetail);
		eventObject.details = updatedEventDetail;
		eventObject.edit = false;
	},

	deleteDayEvent(dayId, eventDetails) {
		const dayObject = this.state.seedData.find(day => day.id === dayId);
		const removeEventIndex = dayObject.events.findIndex(
			event => event.details === eventDetails
		);

		dayObject.events.splice(removeEventIndex, 1);
	}
};
