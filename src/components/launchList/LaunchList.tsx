import { gql, useQuery } from "@apollo/client";
import { LaunchesData, LaunchData } from "../../models/LaunchData";
import LaunchListItem from "./LaunchListItem";

interface LaunchSearchVariables {
	limit: number;
}

const GET_ALL_LAUNCHES = gql`
	query GET_ALL_LAUNCHES($limit: Int) {
		launches(limit: $limit) {
			mission_name
			rocket {
				rocket_name
				rocket_type
			}
			id
			launch_date_utc
			links {
				flickr_images
			}
			details
			launch_site {
				site_name_long
				site_id
			}
			launch_success
		}
	}
`;

const LaunchList = () => {
	const { loading, error, data } = useQuery<
		LaunchesData,
		LaunchSearchVariables
	>(GET_ALL_LAUNCHES, {
		variables: { limit: 5 },
	});

	if (loading) {
		return <h3>Loading Data</h3>;
	}

	if (error) {
		return <h3>Error loading data: {error.message}</h3>;
	}

	return (
		<div>
			{data &&
				data.launches.map((launch: LaunchData) => (
					<LaunchListItem key={launch.id} launch={launch} />
				))}
		</div>
	);
};

export default LaunchList;
