<template>
	<div class="sticky bottom-0 h-fit w-80" :style="{ top: `${topSpacing}px` }">
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
	const headerHeight = useState<number>("headerHeight");
	const calendarApi = useState<CalendarApi>("calendarApi");
	const calendarView = useSessionStorage("calendarView", () => "timeGridDay");
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

	const topSpacing = computed(() => headerHeight.value + 12);

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
