import data from "@/assets/json/accounts.json";

export default defineEventHandler(async (event) => {
	const { email } = await readBody(event);

	if (!email || typeof email !== "string") {
		throw createError({ statusCode: 400, statusMessage: "Email is Required" });
	}

	return data.find((item) => item.email === email);
});
