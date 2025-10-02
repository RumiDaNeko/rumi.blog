import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: "Home",
		url: "/",
	},
	[LinkPreset.About]: {
		name: "About",
		url: "/about/",
	},
	[LinkPreset.Archive]: {
		name: "Archived",
		url: "/archive/",
	},
	[LinkPreset.Series]: {
		name: "series",
		url: '/series/',
	},
	[LinkPreset.Friends]: {
		name: "tomodachi",
		url: '/friends/',
	},
};
