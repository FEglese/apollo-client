import { LaunchData } from "../../models/LaunchData";

export interface LaunchListItemProps {
	launch: LaunchData;
}

const LaunchListItem = (props: LaunchListItemProps) => {
	return (
		<div data-testid="launch-list-item">
			<h2 data-testid="launch-list-item-name">{props.launch.mission_name}</h2>
			<p>{props.launch.details ?? ""}</p>
			<p data-testid="launch-list-item-rocket">
				{props.launch.rocket.rocket_name} - {props.launch.rocket.rocket_type}
			</p>
			<p data-testid="launch-list-item-success">
				Success: {props.launch.launch_success ? "✅" : "❌"}
			</p>
			<p>Date: {new Date(props.launch.launch_date_utc).toLocaleString()}</p>
		</div>
	);
};

export default LaunchListItem;
