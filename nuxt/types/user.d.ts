declare global {
	type User = {
		name: string;
		firstName: string;
		lastName: string;
		email: string;
		role: string;
		avatar?: string;
	};
}

export {};
