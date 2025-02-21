<template>
	<Form v-slot="$form" :resolver="resolver" @submit="onSubmit" :validateOnBlur="true" :validateOnValueUpdate="false">
		<div class="mb-6">
			<h1 class="text-2xl font-medium tracking-tight">Log in to your account</h1>
			<p class="text-muted-color">Enter your email to proceed</p>
		</div>

		<div class="space-y-3">
			<div>
				<label class="sr-only"> Email </label>
				<InputText name="email" ref="emailRef" fluid required />
				<Transition v-bind="heightTransition">
					<Message v-if="$form.email?.error" severity="error" variant="simple">
						{{ $form.email.error?.message }}
					</Message>
				</Transition>
			</div>

			<Button type="submit" label="Continue with Email" :icon="isLoading ? 'pi pi-spinner pi-spin' : ''" :loading="isLoading" fluid />
		</div>
	</Form>
</template>

<script setup lang="ts">
	import type { FormSubmitEvent } from "@primevue/forms";
	import { yupResolver } from "@primevue/forms/resolvers/yup";
	import * as yup from "yup";

	const isLoading = ref(false);
	const loginAccount = useState("loginAccount");
	const loginName = useState("loginName");
	const emailRef = ref();

	const resolver = yupResolver(
		yup.object({
			email: yup.string().email("Please enter a valid email address"),
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

	onMounted(() => {
		emailRef.value.$el.focus();
	});
</script>
