<template>
	<div>
		<div class="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
				<div class="absolute inset-0 bg-zinc-900" />
				<div class="relative z-20 flex items-center text-lg font-medium">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						class="mr-2 h-6 w-6">
						<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
					</svg>
					{{ config.public.brandName }}
				</div>
				<div class="relative z-20 mt-auto">
					<blockquote class="space-y-2">
						<footer class="text-sm">If you are unable to remember your password, please reach out to the administrator for assistance.</footer>
					</blockquote>
				</div>
			</div>
			<div class="flex h-screen items-center justify-center lg:p-8">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const config = useRuntimeConfig();
</script>
