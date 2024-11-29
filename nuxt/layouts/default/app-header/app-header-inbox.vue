<template>
	<Button
		@click="inboxMenu?.toggle"
		variant="text"
		severity="secondary"
		class="aspect-square"
		badge=" "
		badge-class="absolute translate-x-2/3 -translate-y-2/3 size-3 aspect-square min-w-fit"
		badge-severity="danger"
		:pt="{ label: { class: 'hidden' } }"
		icon="pi pi-inbox"
		rounded>
	</Button>
	<Popover ref="inboxMenu">
		<div class="flex flex-col gap-4 w-[20rem]">
			<div>
				<span class="px-3 font-medium block mb-2">Inbox</span>
				<ul class="list-none p-0 m-0 flex flex-col">
					<li v-for="message in messages" :key="message.id" class="flex gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border">
						<div class="size-10 aspect-square border rounded-full bg-surface-50"></div>
						<div class="flex-1">
							<p class="text-sm">{{ message.name }}</p>
							<div class="text-xs mt-1 text-surface-500 dark:text-surface-400 flex gap-2">
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
