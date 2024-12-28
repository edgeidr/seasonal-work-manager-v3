<template>
	<div class="flex gap-6">
		<MyStuffSchedulesTimegrid />
		<MyStuffSchedulesCalendar />
	</div>
</template>

<script setup lang="ts">
	const { formatDateTime } = useDateTime();
	const date = useState<Date>("date");

	const formattedDate = computed(() => {
		return formatDateTime(date.value, {
			month: "long",
			day: "2-digit",
		});
	});
</script>
