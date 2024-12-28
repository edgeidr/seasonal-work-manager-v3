<template>
	<div class="sticky top-0 left-0 z-50 h-screen py-6 pl-6 pr-3">
		<aside class="w-64 rounded-2xl bg-surface-50 flex flex-col h-full">
			<AppSidebarTop />
			<AppSidebarMiddle />
			<AppSidebarBottom />
		</aside>
	</div>
</template>

<script setup lang="ts">
	import AppSidebarBottom from "./app-sidebar-bottom.vue";
	import AppSidebarMiddle from "./app-sidebar-middle.vue";
	import AppSidebarTop from "./app-sidebar-top.vue";
</script>
