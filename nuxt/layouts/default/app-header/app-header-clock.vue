<template>
	<Button
		:label="clockLabel"
		icon="pi pi-stopwatch"
		@click="clockMenu?.toggle"
		variant="text"
		severity="secondary"
		aria-haspopup="true"
		aria-controls="overlay_menu"
		class="font-[Roboto]"
		rounded />

	<Popover ref="clockMenu">
		<div class="flex w-52 flex-col gap-3 py-2">
			<div>
				<div class="mb-2 flex items-center">
					<span class="flex-1 px-2 font-medium">Today</span>
					<Button variant="text" severity="secondary" size="small" icon="pi pi-ellipsis-v" @click="moreMenu?.toggle" />
					<Menu ref="moreMenu" :model="moreMenuItems" :popup="true" />
				</div>

				<div class="text-sm">
					<div class="flex p-2">
						<span class="text-surface-500">Clock In:</span>
						<span class="ml-auto font-[Roboto] font-medium text-surface-700">{{ clockInLabel }}</span>
					</div>

					<div class="flex p-2">
						<span class="text-surface-500">Clock Out:</span>
						<span class="ml-auto font-[Roboto] font-medium text-surface-700">{{ clockOutLabel }}</span>
					</div>
				</div>
			</div>

			<div class="px-2">
				<Button
					:label="clockState.active ? 'Clock Out' : 'Clock In'"
					:icon="clockState.active ? 'pi pi-sign-out' : 'pi pi-sign-in'"
					severity="secondary"
					:class="[clockState.active ? 'hover:border-red-100 hover:bg-red-100' : 'hover:border-green-100 hover:bg-green-100']"
					@click="showConfirm"
					size="small"
					fluid />
			</div>
		</div>
	</Popover>
</template>

<script setup lang="ts">
	import type { MenuItem } from "primevue/menuitem";

	const { formatDateTime } = useDateTime();
	const clockMenu = ref();
	const moreMenu = ref();
	const confirm = useConfirm();
	const clockState = useLocalStorage<ClockState>("clockState", () => {
		return {
			active: false,
			in: null,
			out: null,
		};
	});

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

	const clockLabel = computed(() => {
		const timeIn = new Date(clockState.value.in || 0).getTime();
		const timeOut = new Date(clockState.value.out || 0).getTime();

		if (clockState.value.in && clockState.value.active) {
			const { value: timestamp } = useTimestamp({ offset: -timeIn });

			return formatDateTime(timestamp, {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
				timeZone: "UTC",
			});
		} else if (clockState.value.in && clockState.value.out && !clockState.value.active) {
			return formatDateTime(timeOut - timeIn, {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false,
				timeZone: "UTC",
			});
		} else {
			return "00:00:00";
		}
	});

	const clockInLabel = computed(() => {
		return clockState.value.in ? useDateFormat(clockState.value.in, "hh:mm a", {}).value : null;
	});

	const clockOutLabel = computed(() => {
		return clockState.value.out ? useDateFormat(clockState.value.out, "hh:mm a").value : null;
	});

	const showConfirm = () => {
		let message, confirmSeverity, newClockState;

		if (clockState.value.active) {
			message = "Confirm clock-out at this time?";
			confirmSeverity = "danger";
			newClockState = false;
		} else {
			message = "Confirm clock-in at this time?";
			confirmSeverity = "success";
			newClockState = true;
		}

		confirm.require({
			message: message,
			icon: "pi pi-exclamation-triangle",
			rejectProps: {
				label: "Cancel",
				severity: "secondary",
				outlined: true,
			},
			acceptProps: {
				label: "Confirm",
				severity: confirmSeverity,
			},
			accept: () => {
				clockState.value.active = newClockState;

				if (newClockState) {
					clockState.value.in = new Date();
					clockState.value.out = null;
				} else {
					clockState.value.out = new Date();
				}
			},
		});
	};
</script>
