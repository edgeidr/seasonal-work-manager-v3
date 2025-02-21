export default defineNuxtRouteMiddleware((to, from) => {
	const loginAccount = useState("loginAccount");
	const loginName = useState("loginName");

	if (!loginAccount.value && to.name === "login-verify") {
		loginAccount.value = null;
		loginName.value = null;

		return navigateTo({ name: "login" });
	}
});
