<template>
	<div>
		<div class="bg-surface-100 h-[2px] mx-4"></div>

		<div class="p-4">
			<Button type="button" severity="secondary" variant="text" @click="menu?.toggle" aria-haspopup="true" class="w-full rounded-md">
				<div class="grid flex-1 text-left text-sm leading-tight">
					<span class="truncate font-semibold flex items-center gap-2">
						<Avatar :label="userInitial" />
						<span class="truncate">{{ user.name }} </span>
						<i class="pi pi-ellipsis-v text-xs ml-auto"></i>
					</span>
				</div>
			</Button>

			<Menu
				ref="menu"
				:model="items"
				:popup="true"
				:pt="{
					submenuLabel: { class: 'text-xs' },
					itemLabel: { class: 'text-sm truncate' },
				}">
			</Menu>
		</div>
	</div>
</template>

<script setup lang="ts">
	const menu = ref();
	const isLoggingOut = ref(false);

	const user: User = {
		name: "Ian Del Rosario",
		firstName: "Ian",
		lastName: "Del Rosario",
		email: "edge.idr@gmail.com",
		avatar: "/avatars/shadcn.jpg",
	};

	const items = computed(() => {
		return [
			{
				label: "Account",
				icon: "pi pi-user",
				command: () => navigateTo({ name: "settings-account" }),
			},
			{
				label: "Notifications",
				icon: "pi pi-bell",
				command: () => navigateTo({ name: "settings-notifications" }),
			},
			{
				separator: true,
			},
			{
				label: "Log out",
				icon: isLoggingOut.value ? "pi pi-spinner pi-spin" : "pi pi-sign-out",
				command: signOut,
			},
		];
	});

	const userInitial = computed(() => {
		return (user.firstName.charAt(0) + user.lastName.charAt(0)).toUpperCase();
	});

	const signOut = () => {
		isLoggingOut.value = true;

		setTimeout(async () => {
			isLoggingOut.value = false;
			await navigateTo({ name: "login" });
		}, 3000);
	};
</script>
