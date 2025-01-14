<template>
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
					:pt="{
						root: {
							class: [
								{ 'bg-surface-0 shadow-sm text-surface-700': props.view == item.value },
								{ 'hover:bg-transparent hover:text-surface-700': props.view != item.value },
							],
						},
					}" />
			</div>
		</div>

		<div class="rounded-2xl p-0">
			<DatePicker
				:value="props.date"
				:defaultValue="props.date"
				@valueChange="$emit('update:date', $event)"
				fluid
				inline
				selectOtherMonths
				:pt="{
					panel: { class: 'border-none bg-transparent px-0' },
					header: { class: 'border-none bg-transparent' },
					tableBodyRow: {
						class: [
							{
								'p-datepicker-week': props.view == 'timeGridWeek',
							},
						],
					},
				}" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { CalendarApi } from "@fullcalendar/core";

	const props = defineProps({
		date: {
			type: Date,
			required: true,
		},
		view: {
			type: String,
			required: true,
		},
		calendarApi: {
			type: Object as () => CalendarApi,
			required: false,
		},
	});

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

	watch(
		() => props.view,
		async (newValue, oldValue) => {
			await nextTick();
			props.calendarApi?.changeView(newValue);
		},
		{ immediate: true },
	);
</script>
