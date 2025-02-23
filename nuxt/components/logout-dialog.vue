<template>
	<Dialog v-model:visible="visible" modal :closable="false" :show-header="false" contentClass="pt-5">
		<div class="text-center">
			<ProgressSpinner class="size-10" strokeWidth="4" :pt="pt.progressspinner" />
			<p style="margin-top: 1rem">Logging out...</p>
		</div>
	</Dialog>
</template>

<script setup lang="ts">
	const visible = useState("logoutLoading", () => false);
	const pt = {
		progressspinner: { circle: { class: "!stroke-primary" } },
	};
</script>
