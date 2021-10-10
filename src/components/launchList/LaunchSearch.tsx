import { useLocationDropdown } from "../../hooks/useLocationDropDownOptions";
import Style from "../../style/LaunchSearch.module.scss";

interface LaunchSearchParams {
	searchDisabled: boolean;
	locationId: string;
	setLocationId: (id: string) => void;
	resetPageNumber: () => void;
}

const LaunchSearch = (params: LaunchSearchParams) => {
	const { locations } = useLocationDropdown();

	const handleLocationChange = (e: any) => {
		// Reset the page to 0
		// Otherwise can be on page 6 of a popular location, search for
		// a less popular one and have to go back to page 1 before seeing any content
		params.resetPageNumber();
		params.setLocationId(e.target.value);
	};

	const locationOptions = locations.map((l) => (
		<option key={l.key} value={l.key}>
			{l.val}
		</option>
	));

	return (
		<div className={Style.launch_search}>
			<h3>Search launches</h3>
			<div className={Style.row}>
				<label htmlFor="location">Location: </label>
				<select
					disabled={params.searchDisabled}
					value={params.locationId}
					onChange={handleLocationChange}
					name="location"
					id="location">
					{locationOptions}
				</select>
			</div>
		</div>
	);
};

export default LaunchSearch;
