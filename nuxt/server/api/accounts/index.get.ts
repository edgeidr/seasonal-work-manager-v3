import data from "@/assets/json/accounts.json";

export default defineEventHandler(async (event) => {
	return data;
});
