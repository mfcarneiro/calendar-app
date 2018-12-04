import { seedData } from './seed.js';

export const store = {
	state: {
		seedData
	},
	getActiveDay() {
		return this.state.seedData.find(day => day.active);
	},
	setActiveDay(dayId) {
		this.state.seedData.map(dayObject => {
			dayObject.id === dayId
				? (dayObject.active = true)
				: (dayObject.active = false);
		});
	}
};
