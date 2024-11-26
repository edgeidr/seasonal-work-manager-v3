declare global {
	type User = {
		name: string;
		firstName: string;
		lastName: string;
		email: string;
		avatar?: string;
	};
}

export {};
