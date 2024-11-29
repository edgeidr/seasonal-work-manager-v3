<template>
	<div class="p-6 h-screen">
		<div class="h-full">
			<div class="flex gap-6">
				<AppSidebar />

				<div class="flex-1">
					<AppHeader />
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import AppSidebar from "./app-sidebar/index.vue";
	import AppHeader from "./app-header/index.vue";
</script>
