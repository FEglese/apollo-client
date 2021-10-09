import { LaunchData } from "../../models/LaunchData";

interface Props {
	launch: LaunchData;
}

const LaunchListItem = (props: Props) => {
	return (
		<div>
			<h2>{props.launch.mission_name}</h2>
			<p>{props.launch.details ?? ""}</p>
			<p>
				{props.launch.rocket.rocket_name} - {props.launch.rocket.rocket_type}
			</p>
			<p>Success: {props.launch.launch_success ? "✅" : "❌"}</p>
			<p>Date: {new Date(props.launch.launch_date_utc).toLocaleString()}</p>
		</div>
	);
};

export default LaunchListItem;
