<template>
	<div>
		<div class="p-4">
			<Button type="button" severity="secondary" variant="text" @click="menu?.toggle" aria-haspopup="true" class="w-full rounded-md">
				<div class="grid flex-1 text-left text-sm leading-tight">
					<span class="truncate font-semibold flex items-center gap-2">
						<div class="flex size-8 aspect-square items-center rounded border" :style="{ backgroundColor: activeApp?.themeColor }">
							<div class="size-4 shrink-0" />
						</div>
						<span class="truncate">{{ activeApp?.name }} </span>
						<i class="pi pi-ellipsis-v text-xs ml-auto"></i>
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
					<NuxtLink v-ripple :href="item.url" target="_blank" class="gap-2 px-3 py-2 flex items-center">
						<div class="flex size-6 aspect-square items-center rounded border" :style="{ backgroundColor: item.themeColor }">
							<div class="size-4 shrink-0" />
						</div>
						<span class="text-sm truncate">{{ item.label }}</span>
						<i class="pi pi-external-link text-xs ml-auto"></i>
					</NuxtLink>
				</template>
			</Menu>
		</div>

		<div class="bg-surface-100 h-[2px] mx-4"></div>
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
