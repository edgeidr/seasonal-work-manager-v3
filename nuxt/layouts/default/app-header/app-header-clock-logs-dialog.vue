<template>
	<Dialog :visible="visible" @update:visible="$emit('update:visible')" header="Today's Activity Logs" class="w-96 min-h-40" modal>
		<Timeline :value="events" :pt="timelinePassThrough">
			<template #marker>
				<div class="rounded-full border border-surface-300 p-0.5 my-1">
					<div class="size-2 rounded-full bg-surface-400"></div>
				</div>
			</template>

			<template #content="slotProps">
				<div class="flex items-start">
					<p class="text-sm">{{ slotProps.item.action }}</p>
					<small class="text-surface-500 dark:text-surface-400 ml-auto font-[Roboto]">{{ slotProps.item.time }}</small>
				</div>
			</template>
		</Timeline>
	</Dialog>
</template>

<script setup lang="ts">
	defineProps({
		visible: {
			type: Boolean,
			required: true,
		},
	});

	const events = ref([
		{ action: "Clocked In", time: "06:45 PM" },
		{ action: "Clocked Out", time: "03:01 AM" },
	]);

	const timelinePassThrough = { eventOpposite: { class: "hidden" }, event: { class: "min-h-12" } };
</script>
