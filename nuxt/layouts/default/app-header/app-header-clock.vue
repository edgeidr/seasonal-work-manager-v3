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
		<div class="flex w-52 flex-col gap-3">
			<div>
				<div class="mb-2 flex items-center">
					<span class="flex-1 px-3 font-medium">Today</span>
					<Button variant="text" severity="secondary" size="small" icon="pi pi-ellipsis-v" @click="moreMenu?.toggle" />
					<Menu ref="moreMenu" :model="moreMenuItems" :popup="true" />
				</div>

				<div class="text-sm">
					<div class="flex px-3 py-2">
						<span class="text-surface-500">Clock In:</span>
						<span class="ml-auto font-[Roboto] font-medium text-surface-700">06:45 PM</span>
					</div>

					<div class="flex px-3 py-2">
						<span class="text-surface-500">Clock Out:</span>
						<span class="ml-auto font-[Roboto] font-medium text-surface-700">03:01 AM</span>
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
</template>

<script setup lang="ts">
	import type { MenuItem } from "primevue/menuitem";

	const clockMenu = ref();
	const clockState = ref(false);
	const moreMenu = ref();

	const moreMenuItems = <MenuItem[]>[
		{
			label: "Work Schedule",
			icon: "pi pi-calendar",
			command: () => navigateTo({ name: "my-stuff-schedules" }),
		},
		{
			label: "Activity Log",
			icon: "pi pi-history",
			command: () => navigateTo({ name: "user-activity-log" }),
		},
	];
</script>
