import data from "@/assets/json/accounts.json";

export default defineEventHandler(async (event) => {
	const { email, password } = await readBody(event);

	if (!email || typeof email !== "string") {
		throw createError({ statusCode: 400, statusMessage: "Email is Required" });
	}

	if (!password || typeof password !== "string") {
		throw createError({ statusCode: 400, statusMessage: "Password is Required" });
	}

	const account = data.find((item) => item.email === email && item.password === password);

	if (!account) {
		throw createError({ statusCode: 401 });
	}

	const { password: accountPassword, ...accountData } = account;

	return accountData;
});
