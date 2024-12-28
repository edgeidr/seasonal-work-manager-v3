<template>
	<div class="min-h-screen">
		<div class="h-full flex">
			<AppSidebar />

			<div>
				<AppHeader />

				<main>
					<div class="flex-1 pl-3 pr-6 pt-3 pb-6">
						<slot />
					</div>
				</main>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import AppSidebar from "./app-sidebar/index.vue";
	import AppHeader from "./app-header/index.vue";
</script>
