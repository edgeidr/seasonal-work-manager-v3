<template>
	<div class="flex h-full gap-3">
		<SharedTimegrid :date="selectedDate" ref="sharedTimegridRef" />
		<SharedCalendar v-model:date="selectedDate" v-model:view="selectedView" :calendarApi="sharedTimegridRef?.calendarApi" />
	</div>
</template>

<script setup lang="ts">
	const selectedDate = ref(new Date());
	const selectedView = ref("timeGridDay");
	const sharedTimegridRef = ref();
</script>
