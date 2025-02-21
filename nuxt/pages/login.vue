<template>
	<NuxtPage />
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "authentication",
		middleware: ["verify"],
	});
</script>
