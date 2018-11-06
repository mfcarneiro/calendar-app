<template>
  <div class="day column">
    <div class="day-banner has-text-centered">{{ day.abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number">{{ day.id }}</div>
      <div class="day-event" style="background-color: rgb(153, 255, 153)">
        <div>
          <span class="has-text-centered details">Get Groceries</span>
          <div class="has-text-centered icons">
            <i class="fa fa-pencil-square edit-icon"></i>
            <i class="fa fa-trash-o delete-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CalendarDay extends Vue {
  @Prop({})
  private day!: {};

  constructor() {
    super();
  }
}
</script>

<style lang="scss" scoped>
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
  }

  &:last-child {
    border-right: 1px solid #8f8f8f;
  }

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
</style>
