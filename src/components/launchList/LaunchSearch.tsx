import { useLocationDropdown } from "../../hooks/locationDropDownOptions";
import Style from "../../style/LaunchSearch.module.scss";

const LaunchSearch = () => {
	const { locations, loading } = useLocationDropdown();

	return (
		<div className={Style.launch_search}>
			<label htmlFor="location">Location: </label>
			<select name="location" id="location">
				{locations.map((l) => (
					<option key={l.key} value={l.key}>
						{l.val}
					</option>
				))}
			</select>
		</div>
	);
};

export default LaunchSearch;
