<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!eventDay.edit">
      <h2>{{ eventDay.details }}</h2>
      <div class="has-text-centered icons">
        <i
          class="fa fa-pencil-square edit-icon"
          @click="editEventDetails(day.id, eventDay.details)"
        ></i>
        <i class="fa fa-trash-o delete-icon" @click="deleteEventDetails(day.id, eventDay.details)"></i>
      </div>
    </div>
    <div v-if="eventDay.edit">
      <input v-model="newEventDayDetails" type="text" :placeholder="eventDay.details">
      <div class="has-has-text-centered icons">
        <i
          class="fa fa-check"
          @click="updateEventDetails(day.id, eventDay.details, newEventDayDetails)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { store } from '../store.js';

@Component
export default class CalendarEvent extends Vue {
  @Prop({})
  private eventDay!: {};
  @Prop({})
  private day!: {};

  private storeData = store;
  private newEventDayDetails = '';

  get getEventBackgroundColor(): string {
    const colors: string[] = ['#FF9999', '#85D6FF', '#99FF99'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return `background-color: ${randomColor}`;
  }

  private editEventDetails(dayId, eventDetails): void {
    this.storeData.editEvent(dayId, eventDetails);
  }

  private updateEventDetails(dayId, lastEventDetails, updatedEventDayDetails): void {
    if (updatedEventDayDetails === '') {
      updatedEventDayDetails = lastEventDetails;
    }

    this.storeData.updateEventDetails(dayId, lastEventDetails, updatedEventDayDetails);
    this.newEventDayDetails = '';
  }

  private deleteEventDetails(dayId, eventDetails) {
    this.storeData.deleteDayEvent(dayId, eventDetails);
  }

}
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 10px;

  .details {
    display: block;
  }

  .icons .fa {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
}
</style>
