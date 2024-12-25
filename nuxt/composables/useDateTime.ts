export const useDateTime = () => {
	const getDate = (datetime: string): string => {
		if (!datetime) return "";

		const date = new Date(datetime);

		if (isNaN(date.getDate())) return "";

		return datetime.split(" ")[0];
	};

	const getTime = (datetime: string): string => {
		if (!datetime) return "";

		const date = new Date(datetime);

		if (isNaN(date.getTime())) return "";

		return date.toTimeString().split(" ")[0];
	};

	const formatDateTime = (datetime: string | Date, format: object = {}): string => {
		if (!datetime) return "";

		const date = new Date(datetime);

		if (isNaN(date.getDate())) return "";

		return date.toLocaleString("default", format);
	};

	return {
		getDate,
		getTime,
		formatDateTime,
	};
};
