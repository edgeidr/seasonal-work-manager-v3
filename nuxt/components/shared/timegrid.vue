<template>
	<div class="flex h-full gap-3">
		<ScrollPanel class="w-full" :pt="pt.scrollpanel">
			<FullCalendar ref="calendarRef" :options="calendarOptions" class="h-px" />
		</ScrollPanel>

		<div class="min-w-72">
			<div class="px-3">
				<div class="flex w-full gap-1.5 rounded-md bg-surface-100 p-1.5">
					<Button
						v-for="item in calendarViews"
						:key="item.value"
						:label="item.label"
						:icon="item.icon"
						variant="text"
						severity="secondary"
						size="small"
						@click="$emit('update:view', item.value)"
						fluid
						:data-value="item.value"
						:pt="pt.button" />
				</div>
			</div>

			<div class="mb-6 rounded-2xl p-0">
				<DatePicker
					:value="props.date"
					:defaultValue="props.date"
					@valueChange="$emit('update:date', $event)"
					fluid
					inline
					selectOtherMonths
					:pt="pt.datepicker" />
			</div>

			<div class="px-3">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import FullCalendar from "@fullcalendar/vue3";
	import interactionPlugin from "@fullcalendar/interaction";
	import timeGridPlugin from "@fullcalendar/timegrid";
	import { formatDate, type CalendarApi, type CalendarOptions } from "@fullcalendar/core";
	import type { ButtonPassThroughOptions, DatePickerPassThroughOptions, ScrollPanelPassThroughOptions } from "primevue";

	const props = defineProps({
		date: {
			type: Date,
			required: true,
		},
		view: {
			type: String,
			required: true,
		},
	});

	const pt = reactive({
		scrollpanel: <ScrollPanelPassThroughOptions>{
			barY: { class: "translate-x-full" },
		},
		datepicker: <DatePickerPassThroughOptions>{
			panel: { class: "border-none bg-transparent px-0" },
			header: { class: "border-none bg-transparent" },
			tableBodyRow: {
				class: [
					{
						"p-datepicker-week": props.view == "timeGridWeek",
					},
				],
			},
		},
		button: <ButtonPassThroughOptions>{
			root: ({ instance }) => ({
				class: [
					{ "bg-surface-0 shadow-sm text-surface-700": props.view == instance.$attrs["data-value"] },
					{ "hover:bg-transparent hover:text-surface-700": props.view != instance.$attrs["data-value"] },
				],
			}),
		},
	});
	const calendarRef = ref();
	const calendarViews = [
		{
			value: "timeGridDay",
			label: "Day",
			icon: "pi pi-clock",
		},
		{
			value: "timeGridWeek",
			label: "Week",
			icon: "pi pi-calendar",
		},
	];

	const calendarApi = computed<CalendarApi>(() => calendarRef.value?.getApi());

	const calendarOptions = computed<CalendarOptions>(() => {
		return {
			headerToolbar: false,
			plugins: [interactionPlugin, timeGridPlugin],
			initialView: "timeGridDay",
			nowIndicator: true,
			editable: true,
			allDayText: "",
			eventContent: (arg) => {
				const title = document.createElement("div");
				title.textContent = arg.event.title;
				title.className = "fc-event-title";

				const time = document.createElement("div");
				time.textContent = arg.timeText;
				time.className = "fc-event-time";

				const frame = document.createElement("div");
				frame.append(title, time);
				frame.className = "fc-event-main-frame";

				return { domNodes: [frame] };
			},
			dayHeaderContent: (arg) => {
				const date = arg.date;

				const day = document.createElement("div");
				day.textContent = date.getDate().toString();
				day.className = arg.isToday ? "font-semibold" : "font-light";

				const weekday = document.createElement("div");
				weekday.textContent = formatDate(date, { weekday: "short" });
				weekday.className = arg.isToday ? "font-semibold" : "font-light";

				return { domNodes: [day, weekday] };
			},
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
			initialEvents: [
				{ title: "Holiday", start: new Date().setDate(new Date().getDate() - 1), allDay: true },
				{ title: "Long event", start: new Date(), end: new Date().setDate(new Date().getDate() + 2), allDay: true },
				{ title: "First event", start: new Date().setHours(6, 0, 0) },
				{ title: "Second event", start: new Date().setHours(6, 45, 0) },
				{ title: "Third event", start: new Date().setHours(8, 0, 0), end: new Date().setHours(10, 0, 0) },
				{ title: "Fourth event", start: new Date().setHours(15, 0, 0), end: new Date().setHours(18, 0, 0) },
				{ title: "Fifth event", start: new Date().setHours(20, 0, 0), end: new Date().setHours(22, 30, 0) },
			],
		};
	});

	watch(
		() => props.date,
		async (newValue) => {
			await nextTick();
			calendarApi.value?.gotoDate(newValue);
		},
		{ immediate: true },
	);

	watch(
		() => props.view,
		async (newValue, oldValue) => {
			await nextTick();
			calendarApi?.value?.changeView(newValue);
		},
		{ immediate: true },
	);
</script>
