import type { PrimeVuePTOptions } from "primevue";

export default <PrimeVuePTOptions>{
	datepicker: {
		day: { class: "text-sm" },
		month: { class: "text-sm" },
		year: { class: "text-sm" },
		weekDay: { class: "text-sm" },
		title: { class: "text-sm" },
		pcPrevButton: { icon: { class: "size-3" } },
		pcNextButton: { icon: { class: "size-3" } },
	},
	scrollpanel: {
		barY: { class: "bg-surface-200" },
		barX: { class: "bg-surface-200" },
	},
	menu: {
		submenuLabel: { class: "text-xs" },
		itemLabel: { class: "text-sm truncate" },
	},
	panelmenu: {
		panel: { class: "border-0 p-0 bg-transparent" },
		item: { class: "border-l" },
		rootList: { class: "pl-5" },
	},
	timeline: {
		event: { class: "min-h-12" },
		eventConnector: { class: "w-px" },
	},
	confirmpopup: {
		message: { class: "text-sm" },
		icon: { class: "size-4 text-base" },
		pcAcceptButton: { icon: { class: "text-xs" }, label: { class: "text-xs" } },
		pcRejectButton: { icon: { class: "text-xs" }, label: { class: "text-xs" } },
	},
};
