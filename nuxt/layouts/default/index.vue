<template>
	<div class="p-6 h-screen">
		<div class="h-full">
			<div class="flex gap-4 h-full">
				<AppSidebar />

				<div class="flex flex-col flex-1">
					<AppHeader />

					<div class="flex-1 px-3 py-2">
						<slot />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import AppSidebar from "./app-sidebar/index.vue";
	import AppHeader from "./app-header/index.vue";
</script>
