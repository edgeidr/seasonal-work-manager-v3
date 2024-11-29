<template>
	<header>
		<Menubar :pt="{ root: { class: 'border-none' } }">
			<template #start>
				<AppHeaderClock />
			</template>

			<template #end>
				<div class="flex gap-2">
					<AppHeaderInbox />
					<AppHeaderNotifications />
				</div>
			</template>
		</Menubar>
	</header>
</template>

<script setup lang="ts">
	import AppHeaderClock from "./app-header-clock.vue";
	import AppHeaderInbox from "./app-header-inbox.vue";
	import AppHeaderNotifications from "./app-header-notifications.vue";
</script>
