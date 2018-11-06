<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div>
      <span class="has-text-centered details">{{ eventDay.details }}</span>
      <div class="has-text-centered icons">
        <i class="fa fa-pencil-square edit-icon"></i>
        <i class="fa fa-trash-o delete-icon"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CalendarEvent extends Vue {
  @Prop({})
  private eventDay!: {};
  @Prop({})
  private day!: {};

  get getEventBackgroundColor(): string {
    const colors: string[] = ['#FF9999', '#85D6FF', '#99FF99'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `background-color: ${randomColor}`;
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
