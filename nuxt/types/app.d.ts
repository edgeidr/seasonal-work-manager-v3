declare global {
	type App = {
		name: string;
		shortName: string;
		url: string;
		logo?: string;
	};

	type Apps = App[];
}

export {};
