<template>
	<div class="flex-1">
		<div class="flex gap-3 mb-3 items-center">
			<h2 class="flex-1">{{ formattedDate }}</h2>

			<div class="p-1.5 gap-2 border rounded-md flex">
				<Button
					size="small"
					icon="pi pi-clock"
					severity="secondary"
					:variant="calendarView == 'timeGridDay' ? 'outlined' : 'text'"
					label="Day"
					@click="calendarView = 'timeGridDay'"
					:pt="buttonPassThrough" />

				<Button
					size="small"
					icon="pi pi-calendar"
					severity="secondary"
					:variant="calendarView == 'timeGridWeek' ? 'outlined' : 'text'"
					label="Week"
					@click="calendarView = 'timeGridWeek'"
					:pt="buttonPassThrough" />
			</div>
		</div>

		<FullCalendar ref="calendarRef" :options="calendarOptions" />
	</div>
</template>

<script setup lang="ts">
	import FullCalendar from "@fullcalendar/vue3";
	import interactionPlugin from "@fullcalendar/interaction";
	import timeGridPlugin from "@fullcalendar/timegrid";
	import type { CalendarOptions } from "@fullcalendar/core";
	import type { ButtonPassThroughOptions } from "primevue";

	const { formatDateTime } = useDateTime();
	const calendarRef = ref();
	const date = useState<Date>("date");
	const calendarView = ref<string>("timeGridDay");
	const buttonPassThrough = ref<ButtonPassThroughOptions>({
		root: ({ props }) => ({
			class: [{ "bg-surface-100": props.variant == "outlined" }],
		}),
	});

	const formattedDate = computed(() => {
		return formatDateTime(date.value, {
			month: "long",
			day: "2-digit",
		});
	});

	const calendarOptions = computed<CalendarOptions>(() => {
		return {
			headerToolbar: false,
			plugins: [interactionPlugin, timeGridPlugin],
			initialView: "timeGridDay",
			nowIndicator: true,
			editable: true,
			allDaySlot: false,
			scrollTimeReset: false,
			height: "auto",
			initialEvents: [{ title: "nice event", start: new Date() }],
		};
	});

	const changeView = () => {
		const calendarApi = calendarRef.value.getApi();
		calendarApi.changeView(calendarView.value);
	};

	watch(
		() => calendarView.value,
		() => changeView()
	);
</script>
