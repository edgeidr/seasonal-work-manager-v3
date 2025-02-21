const fadeTransition = <Transition>{
	enterFromClass: "opacity-0",
	enterToClass: "",
	enterActiveClass: "duration-200",
	leaveActiveClass: "duration-200",
	leaveFromClass: "",
	leaveToClass: "opacity-0",
};

const heightTransition = <Transition>{
	enterFromClass: "opacity-0 h-0 ",
	enterToClass: "h-auto",
	enterActiveClass: "duration-200",
	leaveActiveClass: "duration-200",
	leaveFromClass: "h-auto",
	leaveToClass: " opacity-0 h-0 ",
};

export { fadeTransition, heightTransition };
