<template>
	<div class="mx-auto max-w-sm space-y-6">
		<Form v-slot="$form" :resolver="resolver" @submit="onSubmit" :validateOnBlur="true" :validateOnValueUpdate="false">
			<div class="mb-6">
				<h1 class="text-2xl font-medium tracking-tight">Log in to your account</h1>
				<p class="text-muted-color">Enter your email to proceed</p>
			</div>

			<div class="space-y-3">
				<div>
					<label class="sr-only"> Email </label>
					<InputText name="email" ref="emailRef" fluid required />
					<Message v-if="$form.email?.error" severity="error" variant="simple">
						{{ $form.email.error?.message }}
					</Message>
				</div>

				<Button type="submit" label="Continue with Email" :icon="isLoading ? 'pi pi-spinner pi-spin' : ''" :loading="isLoading" fluid />
			</div>
		</Form>

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
			label="Continue with Google"
			:icon="isLoadingGoogle ? 'pi pi-spinner pi-spin' : 'pi pi-google'"
			:disabled="isLoading || isLoadingGoogle"
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
	import type { FormSubmitEvent } from "@primevue/forms";
	import { yupResolver } from "@primevue/forms/resolvers/yup";
	import * as yup from "yup";

	const isLoading = ref(false);
	const isLoadingGoogle = ref(false);
	const loginAccount = useState("loginAccount");
	const loginName = useState("loginName");

	const resolver = yupResolver(
		yup.object({
			email: yup.string().email("Please emter a valid email address"),
		}),
	);

	const onSubmit = ({ valid, states, values, errors }: FormSubmitEvent) => {
		if (!valid) return;

		isLoading.value = true;

		setTimeout(async () => {
			isLoading.value = false;

			const account = await $fetch("/api/accounts/validate-email", {
				method: "POST",
				body: { email: values.email },
			});

			if (!account) {
				states.email.error = { message: "Account does not exist" };
				states.email.invalid = true;
			} else {
				const { email, firstName } = account;

				loginAccount.value = email;
				loginName.value = firstName;

				navigateTo({ name: "login-verify" });
			}
		}, 1000);
	};

	const googleSignIn = () => {
		isLoadingGoogle.value = true;

		setTimeout(async () => {
			isLoadingGoogle.value = false;
			await navigateTo({ name: "dashboard" });
		}, 1000);
	};
</script>
