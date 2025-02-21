declare global {
	type Transition = {
		enterFromClass?: string;
		enterToClass?: string;
		enterActiveClass?: string;
		leaveFromClass?: string;
		leaveToClass?: string;
		leaveActiveClass?: string;
		moveClass?: string;
		class?: string;
	};
}

export {};
