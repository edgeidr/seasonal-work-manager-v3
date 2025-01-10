<template>
	<div class="sticky bottom-0 h-fit w-80" :style="{ top: `${topSpacing}px` }">
		<SelectButton ref="selectViewRef" option v-model="calendarView" :options="calendarViews" option-label="label" option-value="value" class="w-full px-3">
			<template #option="{ option }">
				<div class="flex w-min items-center gap-2" :data-value="option.value">
					<i :class="option.icon" class="text-sm"></i>
					<span class="text-sm">{{ option.label }}</span>
				</div>
			</template>
		</SelectButton>

		<div class="rounded-2xl p-0">
			<DatePicker
				fluid
				v-model="selectedDate"
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

	const selectViewRef = ref<ComponentPublicInstance>();
	const selectedDate = useState<Date>("selectedDate", () => new Date());
	const headerHeight = useState<number>("headerHeight");
	const calendarApi = useState<CalendarApi>("calendarApi");
	const calendarView = ref<string>("timeGridDay");
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

	const changeView = () => {
		calendarApi.value?.changeView(calendarView.value);
	};

	onMounted(async () => {
		await nextTick();
		calendarApi.value?.updateSize();
	});

	watch(
		() => calendarView.value,
		(newValue, oldValue) => {
			if (!newValue) {
				const BTN_VIEW = <HTMLElement>selectViewRef.value?.$el.querySelector(`.p-togglebutton:has([data-value="${oldValue}"])`);
				BTN_VIEW.click();
				return;
			}

			changeView();
		},
	);
</script>
