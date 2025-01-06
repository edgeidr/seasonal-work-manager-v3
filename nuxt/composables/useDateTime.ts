export const useDateTime = () => {
	const formatDateTime = (datetime: string | number | Date, format: object = {}): string => {
		const date = new Date(datetime);
		return date.toLocaleString("default", format);
	};

	return {
		formatDateTime,
	};
};
