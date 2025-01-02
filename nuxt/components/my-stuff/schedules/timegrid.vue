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
const headerHeight = useState<number>("headerHeight");
const selectedDate = useState<Date>("selectedDate");
const topSpacing = computed(() => headerHeight.value);
const calendarApi = computed<CalendarApi>(() => calendarRef.value?.getApi());

useState("calendarApi", () => calendarApi);

const calendarOptions = computed<CalendarOptions>(() => {
    return {
        headerToolbar: false,
        plugins: [interactionPlugin, timeGridPlugin],
        initialView: "timeGrid",
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
        dayHeaderFormat: { weekday: "short", day: "numeric" },
        initialEvents: [{ title: "nice event", start: new Date() }],
    };
});

watch(
    () => topSpacing.value,
    (newValue) => {
        const FC_HEADERS = <NodeListOf<HTMLElement>>document?.querySelectorAll(".fc .fc-scrollgrid-section-sticky > *");

        for (const FC_HEADER of FC_HEADERS) {
            FC_HEADER.style.top = `${newValue}px`;
        }
    },
);

watch(
    () => selectedDate.value,
    (newValue) => {
        calendarApi.value?.gotoDate(newValue);
    },
);
</script>
