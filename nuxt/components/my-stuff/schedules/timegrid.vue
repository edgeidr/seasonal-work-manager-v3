<template>
  <div class="flex-1">
    <FullCalendar ref="calendarRef" :options="calendarOptions" />
  </div>
</template>

<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import type { CalendarApi, CalendarOptions } from "@fullcalendar/core";

const calendarRef = ref();
const calendarApi = computed<CalendarApi>(() => calendarRef.value?.getApi());

useState("calendarApi", () => calendarApi);

const calendarOptions = computed<CalendarOptions>(() => {
  return {
    headerToolbar: false,
    plugins: [interactionPlugin, timeGridPlugin],
    initialView: "timeGridDay",
    nowIndicator: true,
    editable: true,
    allDaySlot: false,
    scrollTimeReset: false,
    eventTimeFormat: {
      hour: "2-digit",
      minute: "2-digit",
      meridiem: "lowercase",
    },
    slotLabelFormat: {
      hour: "2-digit",
      minute: "2-digit",
      meridiem: "lowercase",
    },
    slotDuration: "00:15",
    slotLabelInterval: "01:00",
    height: "auto",
    dayHeaderFormat: { weekday: "short" },
    initialEvents: [{ title: "nice event", start: new Date() }],
  };
});
</script>
