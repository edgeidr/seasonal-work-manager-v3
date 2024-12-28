<template>
	<div class="rounded-2xl bg-surface-50 flex flex-col h-fit sticky" :style="{ top: `${topSpacing}px` }">
		<div class="p-4">
			<DatePicker
				v-model="date"
				inline
				:pt="{ panel: { class: 'border-none  bg-transparent p-2' }, header: { class: 'border-none bg-transparent' } }" />
		</div>
	</div>
</template>

<script setup lang="ts">
	const date = useState("date", () => new Date());
	const headerHeight = useState<number>("headerHeight");
	const topSpacing = computed(() => headerHeight.value + 12);
</script>
