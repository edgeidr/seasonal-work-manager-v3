<template>
	<ScrollPanel class="flex-1 overflow-hidden" :pt="{ barY: '-translate-x-1' }">
		<div class="h-full px-4">
			<PanelMenu class="gap-0 py-4" :model="menuItems">
				<template #item="{ item, root, active }">
					<div v-if="item.groupLabel" class="mt-4 px-2">
						<span class="text-xs font-medium uppercase">{{ item.label }}</span>
					</div>

					<NuxtLink v-else :to="item.route" :class="[root ? 'p-panelmenu-header-link py-3' : 'p-panelmenu-item-link py-2.5', 'text-sm']">
						<i :class="[root ? 'p-panelmenu-header-icon' : 'p-panelmenu-item-icon', item.icon]"></i>
						<span :class="[root ? 'p-panelmenu-header-label' : 'p-panelmenu-item-label', 'truncate']">{{ item.label }}</span>
						<i v-if="item.items" :class="[{ '-rotate-180': active }, 'pi pi-angle-down p-panelmenu-submenu-icon ml-auto duration-200']"></i>
					</NuxtLink>
				</template>
			</PanelMenu>
		</div>
	</ScrollPanel>
</template>

<script setup lang="ts">
	import type { MenuItem } from "primevue/menuitem";

	const menuItems = <MenuItem[]>[
		{
			label: "Schedules",
			icon: "pi pi-calendar",
			route: { name: "schedules" },
		},
		{
			label: "My Stuff",
			icon: "pi pi-box",
			items: [
				{
					label: "Attendance",
					route: { name: "my-stuff-attendance" },
				},
				{
					label: "Overtimes",
					route: { name: "my-stuff-overtimes" },
				},
				{
					label: "Requests",
					route: { name: "my-stuff-requests" },
				},
				{
					label: "Schedules",
					route: { name: "my-stuff-schedules" },
				},
			],
		},
		{
			label: "Finance",
			groupLabel: true,
			disabled: true,
		},
		{
			label: "Payslip",
			icon: "pi pi-money-bill",
			route: { name: "finance-payslip" },
		},
		{
			label: "Team Members",
			icon: "pi pi-users",
			route: { name: "finance-team-members" },
		},
		{
			label: "Setup",
			icon: "pi pi-cog",
			items: [
				{
					label: "Channels",
					route: { name: "finance-setup-channels" },
				},
				{
					label: "Mandatory Deductions",
					route: { name: "finance-setup-mandatory-deductions" },
				},
			],
		},
		{
			label: "References",
			icon: "pi pi-book",
			items: [
				{
					label: "SSS",
					route: { name: "finance-references-sss" },
				},
				{
					label: "Tax",
					route: { name: "finance-references-tax" },
				},
			],
		},
		{
			label: "Admin",
			groupLabel: true,
			disabled: true,
		},
		{
			label: "Reports",
			icon: "pi pi-chart-line",
			route: { name: "admin-reports" },
		},
		{
			label: "Requests",
			icon: "pi pi-envelope",
			route: { name: "admin-requests" },
		},
		{
			label: "Overtimes",
			icon: "pi pi-stopwatch",
			route: { name: "admin-overtimes" },
		},
		{
			label: "Cutoffs",
			icon: "pi pi-calendar-clock",
			route: { name: "admin-cutoffs" },
		},
		{
			label: "Team Members",
			icon: "pi pi-users",
			route: { name: "admin-team-members" },
		},
		{
			label: "Setup",
			icon: "pi pi-cog",
			route: { name: "admin-setup" },
		},
	];
</script>
