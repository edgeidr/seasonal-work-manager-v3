<template>
	<div class="flex">
		<AppSidebar />

		<div class="flex w-full flex-col">
			<AppHeader />
			<AppMain>
				<slot />
			</AppMain>
		</div>
	</div>
</template>

<script setup lang="ts">
	import AppSidebar from "./app-sidebar/index.vue";
	import AppHeader from "./app-header/index.vue";
	import AppMain from "./app-main/index.vue";
</script>
