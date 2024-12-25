<template>
	<div class="flex">
		<div class="flex-1">
			<h2 class="px-3">{{ formattedDate }}</h2>
		</div>
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
