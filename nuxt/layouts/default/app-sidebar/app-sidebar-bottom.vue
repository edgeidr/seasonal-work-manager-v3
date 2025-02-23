<template>
	<div>
		<div class="mx-7 h-px bg-surface-200"></div>

		<div class="p-4">
			<Button type="button" severity="secondary" variant="text" @click="menu?.toggle" aria-haspopup="true" class="w-full rounded-md">
				<div class="grid flex-1 text-left leading-tight">
					<span class="flex items-center gap-2 truncate">
						<Avatar :label="userInitial" class="font-semibold" />
						<div>
							<span class="block truncate text-sm font-medium">{{ user.name }} </span>
							<span class="block truncate text-2xs font-light">{{ user.role }} </span>
						</div>
						<i class="pi pi-ellipsis-v ml-auto text-xs"></i>
					</span>
				</div>
			</Button>

			<Menu ref="menu" :model="items" :popup="true"> </Menu>
		</div>
	</div>
</template>

<script setup lang="ts">
	const menu = ref();
	const logoutLoading = useState("logoutLoading");

	const user: User = {
		name: "Ian Del Rosario",
		firstName: "Ian",
		lastName: "Del Rosario",
		email: "edge.idr@gmail.com",
		role: "Superadmin",
		avatar: "/avatars/shadcn.jpg",
	};

	const items = computed(() => {
		return [
			{
				label: "Activity Log",
				icon: "pi pi-history",
				command: () => navigateTo({ name: "user-activity-log" }),
			},
			{
				label: "Account",
				icon: "pi pi-user",
				command: () => navigateTo({ name: "user-account" }),
			},
			{
				label: "Notifications",
				icon: "pi pi-bell",
				command: () => navigateTo({ name: "user-notifications" }),
			},
			{
				separator: true,
			},
			{
				label: "Log out",
				icon: logoutLoading.value ? "pi pi-spinner pi-spin" : "pi pi-sign-out",
				command: signOut,
			},
		];
	});

	const userInitial = computed(() => {
		return (user.firstName.charAt(0) + user.lastName.charAt(0)).toUpperCase();
	});

	const signOut = () => {
		logoutLoading.value = true;

		setTimeout(async () => {
			logoutLoading.value = false;
			await navigateTo({ name: "login" });
		}, 3000);
	};
</script>
