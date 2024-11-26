<template>
	<div class="p-6 h-screen">
		<div class="h-full">
			<AppSidebar />
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	import AppSidebar from "./app-sidebar/index.vue";
</script>
