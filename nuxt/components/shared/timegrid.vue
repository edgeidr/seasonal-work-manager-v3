<template>
	<ScrollPanel>
		<FullCalendar ref="calendarRef" :options="calendarOptions" class="h-px" />
	</ScrollPanel>
</template>

<script setup lang="ts">
	import FullCalendar from "@fullcalendar/vue3";
	import interactionPlugin from "@fullcalendar/interaction";
	import timeGridPlugin from "@fullcalendar/timegrid";
	import type { CalendarApi, CalendarOptions } from "@fullcalendar/core";

	const calendarRef = ref();
	const selectedDate = useState<Date>("selectedDate");
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
			initialEvents: [
				{ title: "First event", start: new Date().setHours(6, 0, 0) },
				{ title: "Second event", start: new Date().setHours(6, 45, 0) },
				{ title: "Third event", start: new Date().setHours(8, 0, 0), end: new Date().setHours(10, 0, 0) },
				{ title: "Fourth event", start: new Date().setHours(15, 0, 0), end: new Date().setHours(18, 0, 0) },
				{ title: "Fifth event", start: new Date().setHours(20, 0, 0), end: new Date().setHours(22, 30, 0) },
			],
		};
	});

	watch(
		() => selectedDate.value,
		(newValue) => {
			calendarApi.value?.gotoDate(newValue);
		},
	);
</script>
