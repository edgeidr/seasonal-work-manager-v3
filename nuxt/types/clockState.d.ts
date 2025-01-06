declare global {
	type ClockState = {
		active: boolean;
		in: Date | null;
		out: Date | null;
	};
}

export {};
