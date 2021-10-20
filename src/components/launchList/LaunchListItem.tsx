import { useState } from "react";
import { LaunchData } from "../../models/LaunchData";
import styles from "../../style/LaunchListItem.module.scss";

interface LaunchListItemProps {
	launch: LaunchData;
}

const LaunchListItem = (props: LaunchListItemProps) => {
	const successMessage = props.launch.launch_success ? "✅" : "❌";
	const formattedDate = new Date(props.launch.launch_date_utc).toLocaleString();
	const formattedRocket = `${props.launch.rocket.rocket_name} - ${props.launch.rocket.rocket_type}`;

	const [isShowingFullDescription, setShowingFullDescription] =
		useState<boolean>(false);

	const toggleDescription = () => {
		setShowingFullDescription((currentVal) => !currentVal);
	};

	// Flickr images have a quality parameter at the end
	// _o => Original => Unnecesary for this page where the icons are small
	// _c => Medium/ 800px smallest side
	const imageUri = props.launch.links?.flickr_images[0]?.replace(
		"_o.",
		"_c." ?? null
	);

	const description = (
		<>
			{isShowingFullDescription
				? props.launch?.details ?? ""
				: props.launch.details?.slice(0, 100) + "..."}
			<div>
				<button onClick={toggleDescription}>
					{`Show ${isShowingFullDescription ? "less" : "more"} info`}
				</button>
			</div>
		</>
	);

	return (
		<div
			className={imageUri ? styles.list_item : styles.list_item_no_img}
			data-testid="launch-list-item">
			<a
				data-testid="launch-list-item-name"
				href={props.launch.links.wikipedia ?? "#"}>
				<h2>{props.launch.mission_name}</h2>
			</a>

			<table>
				<tbody>
					<tr data-testid="launch-list-item-rocket">
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
					<tr data-testid="launch-list-item-success">
						<th>Success:</th>
						<td>{successMessage}</td>
					</tr>
					{props.launch.details && (
						<tr data-testid="launch-list-item-description">
							<th>Description:</th>
							<td aria-label={props.launch.details}>{description}</td>
						</tr>
					)}
				</tbody>
			</table>

			{imageUri && (
				<img
					data-testid="launch-list-item-image"
					src={imageUri}
					alt={`${props.launch.rocket.rocket_name ?? "rocket"}`}></img>
			)}

			<div className={styles.clearfix}></div>
		</div>
	);
};

export default LaunchListItem;
