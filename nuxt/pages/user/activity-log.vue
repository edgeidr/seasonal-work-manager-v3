<template>
	<Timeline :value="events" :pt="timelinePassThrough">
		<template #marker>
			<div class="my-1.5 size-2 rounded-full border border-surface-300 bg-surface-100"></div>
		</template>

		<template #content="slotProps">
			<div class="flex items-start">
				<p class="text-sm">{{ slotProps.item.action }}</p>
				<small class="ml-auto font-[Roboto] text-surface-500 dark:text-surface-400">{{ slotProps.item.time }}</small>
			</div>
		</template>
	</Timeline>
</template>

<script setup lang="ts">
	const events = ref([
		{ action: "Clocked In", time: "06:45 PM" },
		{ action: "Clocked Out", time: "03:01 AM" },
	]);

	const timelinePassThrough = { eventOpposite: { class: "hidden" }, event: { class: "min-h-12" }, eventConnector: { class: "w-px" } };
</script>
