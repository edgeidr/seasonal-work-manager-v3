<template>
	<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">Welcome back!</h1>
			<p class="text-sm text-muted-foreground">Enter your email below to sign in</p>
		</div>

		<div class="grid gap-6">
			<form @submit.prevent="onSubmit">
				<div class="grid gap-2">
					<div class="grid gap-1">
						<label class="sr-only" for="email"> Email </label>
						<InputText placeholder="name@example.com" type="email" />
					</div>
					<Button
						type="submit"
						label="Sign In with Email"
						:icon="isLoading ? 'pi pi-spinner pi-spin' : ''"
						:loading="isLoading"
						:disabled="isLoading || isLoadingGoogle" />
				</div>
			</form>
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t" />
				</div>
				<div class="relative flex justify-center text-xs">
					<span class="bg-surface-0 px-2 text-muted-foreground"> or continue with </span>
				</div>
			</div>
			<Button
				type="button"
				severity="secondary"
				label="Google"
				:icon="isLoadingGoogle ? 'pi pi-spinner pi-spin' : 'pi pi-google'"
				:disabled="isLoading || isLoadingGoogle"
				:loading="isLoadingGoogle"
				@click="googleSignIn" />
		</div>

		<p class="px-8 text-center text-sm text-muted-foreground">
			By clicking continue, you agree to our
			<NuxtLink to="#" class="underline underline-offset-4 hover:text-primary"> Terms of Service </NuxtLink>
			and
			<NuxtLink to="#" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </NuxtLink>
			.
		</p>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "authentication",
	});

	const isLoading = ref(false);
	const isLoadingGoogle = ref(false);

	const onSubmit = () => {
		isLoading.value = true;

		setTimeout(async () => {
			isLoading.value = false;
			await navigateTo({ name: "index" });
		}, 3000);
	};

	const googleSignIn = () => {
		isLoadingGoogle.value = true;

		setTimeout(async () => {
			isLoadingGoogle.value = false;
			await navigateTo({ name: "index" });
		}, 3000);
	};
</script>
