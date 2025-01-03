<template>
	<Button
		@click="inboxMenu?.toggle"
		variant="text"
		severity="secondary"
		class="aspect-square"
		badge=" "
		badge-class="absolute translate-x-2/3 -translate-y-2/3 size-3 aspect-square min-w-fit"
		badge-severity="danger"
		icon="pi pi-inbox"
		rounded
		:pt="{ label: { hidden: true } }">
	</Button>

	<Popover ref="inboxMenu">
		<div class="flex w-[20rem] flex-col gap-4">
			<div>
				<span class="mb-2 block px-3 font-medium">Inbox</span>
				<ul class="m-0 flex list-none flex-col p-0">
					<li v-for="message in messages" :key="message.id" class="flex cursor-pointer gap-2 px-2 py-3 rounded-border hover:bg-emphasis">
						<div class="aspect-square size-10 rounded-full border bg-surface-50"></div>
						<div class="flex-1">
							<p class="text-sm">{{ message.name }}</p>
							<div class="mt-1 flex gap-2 text-xs text-surface-500 dark:text-surface-400">
								<p class="line-clamp-1 flex-1">{{ message.lastestMessage }}</p>
								<span>8h</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</Popover>
</template>

<script setup lang="ts">
	const inboxMenu = ref();

	const messages = ref([
		{
			id: 2,
			image: "",
			name: "Japeth Escaño",
			lastestMessage:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis beatae facilis veniam voluptatibus voluptatum repellat ea esse dolorem culpa ad?",
		},
		{
			id: 1,
			image: "",
			name: "Denmark Libutan",
			lastestMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat culpa consequatur nesciunt facilis unde!",
		},
	]);
</script>
