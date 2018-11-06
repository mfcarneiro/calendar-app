<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
      <CalendarDay v-for="day in sharedState.seedData"
        :key="day.id"
        :day="day" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CalendarDay from './CalendarDay.vue';
import { store } from '../store.js';

@Component({
  components: {
    CalendarDay,
  },
})
export default class CalendarWeek extends Vue {
  private sharedState = store.state;

  constructor() {
    super();
  }
}
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }

  .day {
    background-color: #4a4a4a;
    color: #fff;
    border-left: 1px solid #8f8f8f;
    border-bottom: 1px solid #8f8f8f;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: darken(#4a4a4a, 3%);
    }

    .day-banner {
      background-color: #333333;
      color: #fff;
      padding: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 600;
    }

    .day-details {
      padding: 10px;

      .day-event {
        margin-top: 6px;
        margin-bottom: 6px;
        display: block;
        color: #4c4c4c;
        padding: 5px;

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
    }

    &:last-child {
      border-right: 1px solid #8f8f8f;
    }
  }
}
</style>
