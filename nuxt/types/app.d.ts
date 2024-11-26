declare global {
	type App = {
		name: string;
		url: string;
		themeColor: string;
		logo?: string;
	};

	type Apps = App[];
}

export {};
