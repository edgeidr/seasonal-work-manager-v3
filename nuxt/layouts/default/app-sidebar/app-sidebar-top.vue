<template>
	<div>
		<div class="p-4">
			<Button type="button" severity="secondary" variant="text" @click="menu?.toggle" aria-haspopup="true" class="w-full rounded-md">
				<div class="grid flex-1 text-left text-sm leading-tight">
					<span class="flex items-center gap-2 truncate font-semibold">
						<div class="flex aspect-square size-8 items-center rounded border" :style="{ backgroundColor: activeApp?.themeColor }">
							<div class="size-4 shrink-0" />
						</div>
						<span class="truncate">{{ activeApp?.name }} </span>
						<i class="pi pi-ellipsis-v ml-auto text-xs"></i>
					</span>
				</div>
			</Button>

			<Menu
				ref="menu"
				:model="items"
				:popup="true"
				:pt="{
					root: { class: 'max-w-64' },
					submenuLabel: { class: 'text-xs' },
					itemLabel: { class: 'text-sm truncate' },
				}">
				<template #item="{ item }">
					<NuxtLink v-ripple :href="item.url" target="_blank" class="flex items-center gap-2 px-3 py-2">
						<div class="flex aspect-square size-6 items-center rounded border" :style="{ backgroundColor: item.themeColor }">
							<div class="size-4 shrink-0" />
						</div>
						<span class="truncate text-sm">{{ item.label }}</span>
						<i class="pi pi-external-link ml-auto text-xs"></i>
					</NuxtLink>
				</template>
			</Menu>
		</div>

		<div class="mx-7 h-px bg-surface-200"></div>
	</div>
</template>

<script setup lang="ts">
	import appsData from "@/assets/json/apps.json";

	const config = useRuntimeConfig();
	const apps: Apps = appsData;
	const menu = ref();

	const activeApp = computed(() => apps.find((app) => app.name == config.public.appName));
	const inActiveApps = computed(() => apps.filter((app) => app.name != config.public.appName));

	const items = computed(() => {
		return [
			{
				label: "Other apps",
				items: inActiveApps.value.map((app) => {
					return {
						label: app.name,
						url: app.url,
						themeColor: app.themeColor,
					};
				}),
			},
		];
	});
</script>
