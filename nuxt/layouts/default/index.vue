<template>
	<div class="flex">
		<AppSidebar />

		<div class="w-full">
			<AppHeader />

			<main>
				<div class="flex-1 pb-6 pl-3 pr-6 pt-3">
					<slot />
				</div>
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
	import AppSidebar from "./app-sidebar/index.vue";
	import AppHeader from "./app-header/index.vue";
</script>
