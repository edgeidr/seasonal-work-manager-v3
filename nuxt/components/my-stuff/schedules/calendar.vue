<template>
  <div class="sticky h-fit" :style="{ top: `${topSpacing}px` }">
    <div class="mb-3 flex gap-2 rounded-md">
      <Button
        size="small"
        icon="pi pi-clock"
        severity="secondary"
        :variant="calendarView == 'timeGridDay' ? 'outlined' : 'text'"
        label="Day"
        @click="calendarView = 'timeGridDay'"
        :pt="buttonPassThrough"
        fluid
      />

      <Button
        size="small"
        icon="pi pi-calendar"
        severity="secondary"
        :variant="calendarView == 'timeGridWeek' ? 'outlined' : 'text'"
        label="Week"
        @click="calendarView = 'timeGridWeek'"
        :pt="buttonPassThrough"
        fluid
      />
    </div>

    <div class="flex flex-col rounded-2xl bg-surface-50">
      <div class="p-4">
        <DatePicker
          v-model="date"
          inline
          selection-mode="range"
          :pt="{
            panel: { class: 'border-none  bg-transparent p-2 w-96' },
            header: { class: 'border-none bg-transparent' },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CalendarApi } from "@fullcalendar/core";
import type { ButtonPassThroughOptions } from "primevue";

const date = useState("date", () => new Date());
const headerHeight = useState<number>("headerHeight");
const calendarApi = useState<CalendarApi>("calendarApi");
const calendarView = ref<string>("timeGridDay");
const buttonPassThrough = ref<ButtonPassThroughOptions>({
  root: ({ props }) => ({
    class: [{ "bg-surface-50": props.variant == "outlined" }],
  }),
});

const topSpacing = computed(() => headerHeight.value + 12);

const changeView = () => {
  calendarApi.value.changeView(calendarView.value);
};

onMounted(async () => {
  await nextTick();
  calendarApi.value.updateSize();
});

watch(
  () => calendarView.value,
  () => changeView(),
);
</script>
