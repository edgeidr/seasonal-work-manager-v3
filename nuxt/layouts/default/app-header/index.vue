<template>
	<header ref="headerRef" class="sticky top-0 z-40">
		<div class="bg-surface-0 px-0 pb-3 pl-0 pr-6 pt-6">
			<Menubar :pt="{ root: { class: 'border-none p-0' } }">
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
		</div>
	</header>
</template>

<script setup lang="ts">
	import AppHeaderClock from "./app-header-clock.vue";
	import AppHeaderInbox from "./app-header-inbox.vue";
	import AppHeaderNotifications from "./app-header-notifications.vue";

	const headerRef = ref<HTMLElement>();
	const { height } = useElementSize(headerRef);

	useState("headerHeight", () => height);
</script>
