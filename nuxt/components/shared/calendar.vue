<template>
	<div class="sticky bottom-0 h-fit w-72" :style="{ top: `${topSpacing}px` }">
		<div class="mb-3 flex gap-2 rounded-md px-3">
			<Button
				size="small"
				icon="pi pi-clock"
				severity="secondary"
				:variant="calendarView == 'timeGridDay' ? undefined : 'text'"
				label="Day"
				@click="calendarView = 'timeGridDay'"
				fluid />

			<Button
				size="small"
				icon="pi pi-calendar"
				severity="secondary"
				:variant="calendarView == 'timeGridWeek' ? undefined : 'text'"
				label="Week"
				@click="calendarView = 'timeGridWeek'"
				fluid />
		</div>

		<div class="rounded-2xl p-0">
			<DatePicker
				fluid
				v-model="selectedDate"
				inline
				:pt="{
					panel: { class: 'border-none bg-transparent p-0' },
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
	const calendarView = ref<string>("timeGridDay");

	const topSpacing = computed(() => headerHeight.value + 12);

	const changeView = () => {
		calendarApi.value?.changeView(calendarView.value);
	};

	onMounted(async () => {
		await nextTick();
		calendarApi.value?.updateSize();
	});

	watch(
		() => calendarView.value,
		() => changeView(),
	);
</script>
