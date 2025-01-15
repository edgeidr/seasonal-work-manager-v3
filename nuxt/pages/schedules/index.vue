<template>
	<SharedTimegrid v-model:date="selectedDate" v-model:view="selectedView" />
</template>

<script setup lang="ts">
	const selectedDate = ref(new Date());
	const selectedView = ref("timeGridDay");
</script>
