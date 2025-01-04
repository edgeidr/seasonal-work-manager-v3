<template>
	<div>
		<div class="p-4">
			<Button type="button" severity="secondary" variant="text" @click="popoverApps?.toggle" aria-haspopup="true" class="w-full rounded-md">
				<div class="grid flex-1 text-left text-sm leading-tight">
					<span class="flex items-center gap-2 truncate font-semibold">
						<div class="flex aspect-square size-8 items-center rounded border bg-surface-100"></div>
						<span class="truncate">{{ activeApp?.shortName }} </span>
						<i class="pi pi-ellipsis-v max-w- max-w- ml-auto text-xs"></i>
					</span>
				</div>
			</Button>

			<Popover ref="popoverApps">
				<div class="grid grid-cols-3">
					<NuxtLink v-for="app in inActiveApps" :key="app.name" class="aspect-square rounded-md hover:bg-surface-100" :to="app.url" external>
						<div class="grid justify-center gap-1 p-2">
							<div class="aspect-square size-12 rounded-md border bg-surface-50"></div>
							<span class="truncate text-center text-xs">{{ app.shortName }}</span>
						</div>
					</NuxtLink>
				</div>
			</Popover>
		</div>

		<div class="mx-7 h-px bg-surface-200"></div>
	</div>
</template>

<script setup lang="ts">
	import appsData from "@/assets/json/apps.json";

	const config = useRuntimeConfig();
	const apps = <Apps>appsData;
	const popoverApps = ref();

	const activeApp = computed(() => apps.find((app) => app.name == config.public.appName));
	const inActiveApps = computed(() => apps.filter((app) => app.name != config.public.appName));
</script>
