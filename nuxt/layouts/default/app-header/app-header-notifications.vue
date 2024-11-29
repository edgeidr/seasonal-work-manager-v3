<template>
	<Button
		@click="notificationsMenu?.toggle"
		variant="text"
		class="aspect-square"
		severity="secondary"
		aria-haspopup="true"
		aria-controls="overlay_menu"
		badge=" "
		badge-class="absolute translate-x-2/3 -translate-y-2/3 size-3 aspect-square min-w-fit"
		badge-severity="danger"
		:pt="{ label: { class: 'hidden' } }"
		icon="pi pi-bell"
		rounded>
	</Button>
	<Popover ref="notificationsMenu">
		<div class="flex flex-col w-[20rem]">
			<div>
				<span class="px-3 font-medium block mb-2">Notifications</span>
				<ul class="list-none p-0 m-0 flex flex-col">
					<li
						v-for="notification in notifications"
						:key="notification.id"
						class="flex gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border">
						<div class="size-10 aspect-square border rounded-full bg-surface-50"></div>
						<div>
							<p class="text-sm line-clamp-2">{{ notification.message }}</p>
							<div class="text-xs mt-1 text-surface-500 dark:text-surface-400">Just now</div>
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
