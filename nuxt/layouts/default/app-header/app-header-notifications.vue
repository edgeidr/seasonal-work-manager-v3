<template>
	<Button
		@click="notificationsMenu?.toggle"
		variant="text"
		class="aspect-square"
		severity="secondary"
		badge=" "
		badge-class="absolute translate-x-2/3 -translate-y-2/3 size-3 aspect-square min-w-fit"
		badge-severity="danger"
		icon="pi pi-bell"
		rounded
		:pt="{ label: { hidden: true } }">
	</Button>

	<Popover ref="notificationsMenu">
		<div class="flex w-[20rem] flex-col">
			<div>
				<span class="mb-2 block px-3 font-medium">Notifications</span>
				<ul class="m-0 flex list-none flex-col p-0">
					<li
						v-for="notification in notifications"
						:key="notification.id"
						class="flex cursor-pointer gap-2 px-2 py-3 rounded-border hover:bg-emphasis">
						<div class="aspect-square size-10 rounded-full border bg-surface-50"></div>
						<div>
							<p class="line-clamp-2 text-sm">{{ notification.message }}</p>
							<div class="mt-1 text-xs text-surface-500 dark:text-surface-400">Just now</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</Popover>
</template>

<script setup lang="ts">
	const notificationsMenu = ref();

	const notifications = ref([
		{
			id: 2,
			from: {
				image: "",
				name: "Japeth Escaño",
			},
			message: "Japeth Escaño approved your leave request.",
			createdAt: "2024-11-28 11:00:00",
		},
		{
			id: 1,
			from: {
				image: "",
				name: "Japeth Escaño",
			},
			message: "Japeth Escaño rejected your schedule request.",
			createdAt: "2024-11-28 09:00:00",
		},
	]);
</script>
