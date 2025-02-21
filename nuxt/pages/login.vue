<template>
	<div class="mx-auto w-full max-w-sm space-y-6">
		<NuxtPage />

		<div class="relative">
			<div class="absolute inset-0 flex items-center">
				<span class="w-full border-t" />
			</div>
			<div class="relative flex justify-center text-sm">
				<span class="bg-surface-0 px-2 text-muted-color"> or continue with </span>
			</div>
		</div>

		<Button
			type="button"
			severity="secondary"
			label="Google"
			:icon="isLoadingGoogle ? 'pi pi-spinner pi-spin' : 'pi pi-google'"
			:loading="isLoadingGoogle"
			fluid
			@click="googleSignIn" />

		<p class="text-muted-foreground mt-6 px-8 text-center text-sm">
			By continuing, you agree to our
			<NuxtLink to="#" class="inline-block underline underline-offset-4 hover:text-primary"> Terms of Service </NuxtLink>
			and
			<NuxtLink to="#" class="inline-block underline underline-offset-4 hover:text-primary"> Privacy Policy </NuxtLink>
			.
		</p>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "authentication",
		middleware: ["verify"],
		pageTransition: {
			...fadeTransition,
			mode: "out-in",
		},
	});

	const isLoadingGoogle = ref(false);

	const googleSignIn = () => {
		isLoadingGoogle.value = true;

		setTimeout(async () => {
			isLoadingGoogle.value = false;
			await navigateTo({ name: "dashboard" });
		}, 1000);
	};
</script>
