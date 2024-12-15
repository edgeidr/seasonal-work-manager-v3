<template>
	<Button
		label="00:00:00"
		icon="pi pi-stopwatch"
		@click="clockMenu?.toggle"
		variant="text"
		severity="secondary"
		aria-haspopup="true"
		aria-controls="overlay_menu"
		class="font-[Roboto]"
		rounded />

	<Popover ref="clockMenu">
		<div class="flex flex-col gap-3 w-52">
			<div>
				<div class="mb-2 flex items-center">
					<span class="px-3 font-medium flex-1">Today</span>
					<Button variant="text" severity="secondary" size="small" icon="pi pi-ellipsis-v" @click="moreMenu?.toggle" />
					<Menu ref="moreMenu" :model="moreMenuItems" :popup="true" :pt="moreMenuPassThrough" />
				</div>

				<div class="text-sm">
					<div class="flex px-3 py-2">
						<span class="text-surface-500">Clock In:</span>
						<span class="text-surface-700 font-medium ml-auto font-[Roboto]">06:45 PM</span>
					</div>

					<div class="flex px-3 py-2">
						<span class="text-surface-500">Clock Out:</span>
						<span class="text-surface-700 font-medium ml-auto font-[Roboto]">03:01 AM</span>
					</div>
				</div>
			</div>

			<div>
				<ToggleButton
					on-label="Clock Out"
					on-icon="pi pi-sign-out"
					off-label="Clock In"
					off-icon="pi pi-sign-in"
					class="w-full"
					@click="console.log(clockState)"
					v-model="clockState"
					:pt="{
						root: ({ context }) => ({
							class: [
								context.active ? 'hover:bg-red-100' : 'hover:bg-green-100',
								'before:hidden *:*:text-surface-500 *:*:hover:text-surface-700',
							],
						}),
					}" />
			</div>
		</div>
	</Popover>

	<AppHeaderClockLogsDialog v-model:visible="dialogVisible" />
</template>

<script setup lang="ts">
	import AppHeaderClockLogsDialog from "./app-header-clock-logs-dialog.vue";

	const clockMenu = ref();
	const clockState = ref(false);
	const moreMenu = ref();
	const dialogVisible = ref(false);

	const moreMenuPassThrough = {
		submenuLabel: { class: "text-xs" },
		itemLabel: { class: "text-sm truncate" },
	};

	const moreMenuItems = [
		{
			label: "Work Schedule",
			icon: "pi pi-calendar",
			command: () => (dialogVisible.value = true),
		},
		{
			label: "Activity Logs",
			icon: "pi pi-history",
			command: () => (dialogVisible.value = true),
		},
	];
</script>
