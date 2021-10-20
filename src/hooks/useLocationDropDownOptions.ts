import { useQuery } from "@apollo/client";
import { GET_ALL_LOCATIONS_QUERY } from "../components/launchList/LaunchListQueries";

export interface LocationsResponse {
	launches: {
		launch_site: {
			site_id: string;
			site_name_long: string;
		};
	}[];
}

export interface LocationDropDownOptions {
	options: { key: string; value: string }[];
}

export const useLocationDropdown = () => {
	const { data } = useQuery<LocationsResponse>(GET_ALL_LOCATIONS_QUERY);

	/**
	 * Checking if a duplicate key/val pair already exists in an array
	 * Becuase two objects with the same values are not the same instead I
	 * convert each object into a string using :-: as a seperator then back again
	 * Complexity: O(n^2) - Fortunately only runs on hook load
	 */

	let locationStrings: string[] = [];
	data?.launches.forEach((launch) => {
		const key: string = launch?.launch_site?.site_id;
		const val: string = launch?.launch_site?.site_name_long;

		const pair = `${key}:-:${val}`;
		if (!locationStrings.includes(pair)) {
			locationStrings.push(pair);
		}
	});

	const locations: { key: string; val: string }[] = locationStrings.map(
		(loc) => {
			const key = loc.split(":-:")[0];
			const val = loc.split(":-:")[1];
			return { key, val };
		}
	);

	// Add an empty option at the top
	locations.unshift({ key: "", val: "Select a launch location" });

	return { locations };
};
