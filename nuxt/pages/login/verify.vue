<template>
	<Form v-slot="$form" :resolver="resolver" @submit="onSubmit" :validateOnBlur="true" :validateOnValueUpdate="false">
		<div class="mb-6">
			<h1 class="text-2xl font-medium tracking-tight">Hi, {{ loginName }}</h1>
			<p class="text-muted-color">Enter your password to complete sign-in</p>
		</div>

		<div class="space-y-3">
			<div>
				<label class="sr-only"> Password </label>
				<Password name="password" ref="passwordRef" :feedback="false" toggle-mask fluid required />
				<Transition v-bind="heightTransition">
					<Message v-if="$form.password?.error" severity="error" variant="simple">
						{{ $form.password?.error?.message }}
					</Message>
				</Transition>
			</div>

			<Button type="submit" label="Sign In" :icon="loading ? 'pi pi-spinner pi-spin' : ''" :loading="loading" fluid />
		</div>
	</Form>
</template>

<script setup lang="ts">
	import type { FormSubmitEvent } from "@primevue/forms";
	import { yupResolver } from "@primevue/forms/resolvers/yup";
	import * as yup from "yup";

	const user = useCookie<User>("user");
	const loginAccount = useState("loginAccount");
	const loginName = useState("loginName");
	const loading = ref(false);
	const passwordRef = ref();

	const resolver = yupResolver(
		yup.object({
			password: yup.string(),
		}),
	);

	const onSubmit = ({ valid, states, values }: FormSubmitEvent) => {
		if (!valid) return;

		loading.value = true;

		setTimeout(async () => {
			loading.value = false;

			try {
				const account = await $fetch("/api/accounts/login", {
					method: "POST",
					body: {
						email: loginAccount.value,
						password: values.password,
					},
				});

				user.value = account;
				await navigateTo({ name: "schedules" });
			} catch (error) {
				states.password.error = { message: "Password is incorrect" };
				states.password.invalid = true;
			}
		}, 1000);
	};

	onMounted(() => {
		passwordRef.value?.$pcForm.$el[0].focus();
	});
</script>
