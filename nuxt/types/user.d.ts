declare global {
	type User = {
		firstName: string;
		lastName: string;
		email: string;
		role: string;
		avatar?: string;
	} | null;
}

export {};
