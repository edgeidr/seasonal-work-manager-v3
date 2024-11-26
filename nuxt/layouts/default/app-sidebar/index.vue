<template>
	<div class="w-64 h-full rounded-2xl bg-surface-50 flex flex-col">
		<AppSidebarTop />
		<AppSidebarMiddle />
		<AppSidebarBottom />
	</div>
</template>

<script setup lang="ts">
	import AppSidebarBottom from "./app-sidebar-bottom.vue";
	import AppSidebarMiddle from "./app-sidebar-middle.vue";
	import AppSidebarTop from "./app-sidebar-top.vue";
</script>
