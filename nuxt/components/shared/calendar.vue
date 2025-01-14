<template>
	<div>
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
					@click="calendarView = item.value"
					fluid
					:pt="{
						root: {
							class: [
								{ 'bg-surface-0 shadow-sm text-surface-700': calendarView == item.value },
								{ 'hover:bg-transparent hover:text-surface-700': calendarView != item.value },
							],
						},
					}" />
			</div>
		</div>

		<div class="rounded-2xl p-0">
			<DatePicker
				v-model="selectedDate"
				fluid
				inline
				selectOtherMonths
				:pt="{
					panel: { class: 'border-none bg-transparent px-0' },
					header: { class: 'border-none bg-transparent' },
					tableBodyRow: {
						class: [
							{
								'p-datepicker-week': calendarView == 'timeGridWeek',
							},
						],
					},
				}" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { CalendarApi } from "@fullcalendar/core";

	const selectedDate = useState<Date>("selectedDate", () => new Date());
	const calendarApi = useState<CalendarApi>("calendarApi");
	const calendarView = useSessionStorage("calendarView", () => "timeGridWeek");
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

	onMounted(async () => {
		await nextTick();
		calendarApi.value?.updateSize();
	});

	watch(
		() => calendarView.value,
		async (newValue, oldValue) => {
			await nextTick();
			calendarApi.value?.changeView(newValue);
		},
		{ immediate: true },
	);
</script>
