<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CalendarEntry from './components/CalendarEntry.vue';
import CalendarWeek from './components/CalendarWeek.vue';

@Component({
  components: {
    CalendarEntry,
    CalendarWeek,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
