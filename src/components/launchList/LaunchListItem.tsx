import { LaunchData } from "../../models/LaunchData";

import styles from "../../style/LaunchListItem.module.scss";

export interface LaunchListItemProps {
	launch: LaunchData;
}

const LaunchListItem = (props: LaunchListItemProps) => {
	const successMessage = props.launch.launch_success ? "✅" : "❌";
	const formattedDate = new Date(props.launch.launch_date_utc).toLocaleString();
	const formattedRocket = `${props.launch.rocket.rocket_name} - ${props.launch.rocket.rocket_type}`;

	// Flickr images have a quality parameter at the end
	// _o => Original => Unnecesary for this page where the icons are small
	// _c => Medium/ 800px smallest side
	const imageUri = props.launch.links?.flickr_images[0]?.replace(
		"_o.",
		"_c." ?? null
	);

	return (
		<div className={styles.list_item} data-testid="launch-list-item">
			<a href={props.launch.links.wikipedia ?? "#"}>
				<h2 data-testid="launch-list-item-name">{props.launch.mission_name}</h2>
			</a>

			<table>
				<tbody>
					<tr>
						<th>Rocket:</th>
						<td>{formattedRocket}</td>
					</tr>
					<tr>
						<th>Location:</th>
						<td>{props.launch.launch_site.site_name_long}</td>
					</tr>
					<tr>
						<th>Date:</th>
						<td>{formattedDate}</td>
					</tr>
					<tr>
						<th>Sucess:</th>
						<td>{successMessage}</td>
					</tr>
				</tbody>
			</table>

			{imageUri && (
				<img
					src={imageUri}
					alt={`Photo of ${props.launch.rocket.rocket_name ?? "rocket"}`}></img>
			)}

			<div className={styles.clearfix}></div>
		</div>
	);
};

export default LaunchListItem;
