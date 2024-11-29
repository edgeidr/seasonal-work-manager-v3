<template>
	<Button
		label="00:00:00"
		icon="pi pi-stopwatch"
		@click="clockMenu?.toggle"
		variant="text"
		severity="secondary"
		aria-haspopup="true"
		aria-controls="overlay_menu"
		rounded />

	<Popover ref="clockMenu">
		<div class="flex flex-col gap-3 w-52">
			<div>
				<div class="mb-2 flex items-center">
					<span class="px-3 font-medium flex-1">Today</span>
					<Button
						@mousedown.left="smash = true"
						@mouseup.left="smash = false"
						@mouseenter="ready = true"
						@mouseleave="ready = false"
						@click.right.prevent="(flip = !flip), (smash = false)"
						:class="[{ 'cursor-none': ready }, 'hover:bg-transparent']"
						variant="text"
						severity="secondary"
						size="small"
						style="--p-ripple-background: transparent">
						<div :class="[{ '-scale-x-[1]': flip }, 'duration-200']">
							<i
								:class="[
									{ 'rotate-45 translate-y-1 translate-x-1': smash },
									{ '-rotate-45': ready },
									'pi pi-hammer duration-200 origin-bottom-left',
								]" />
						</div>
					</Button>
				</div>

				<div class="text-sm">
					<div class="flex px-3 py-2">
						<span class="text-surface-500">Clock In:</span>
						<span class="text-surface-700 font-medium ml-auto">06:45 PM</span>
					</div>

					<div class="flex px-3 py-2">
						<span class="text-surface-500">Clock Out:</span>
						<span class="text-surface-700 font-medium ml-auto">03:01 AM</span>
					</div>
				</div>
			</div>

			<div>
				<ToggleButton
					on-label="Clock Out"
					on-icon="pi pi-sign-out"
					off-label="Clock In"
					off-icon="pi pi-sign-in"
					class="w-full"
					@click="console.log(clockState)"
					v-model="clockState"
					:pt="{
						root: ({ context }) => ({
							class: [context.active ? 'bg-red-100' : 'bg-green-100', 'before:hidden *:*:text-surface-500 *:*:hover:text-surface-700'],
						}),
					}" />
			</div>
		</div>
	</Popover>
</template>

<script setup lang="ts">
	const clockMenu = ref();
	const clockState = ref(false);
	const smash = ref(false);
	const flip = ref(true);
	const ready = ref(false);
</script>
