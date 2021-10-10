import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { LaunchesData, LaunchData } from "../../models/LaunchData";
import LaunchListItem from "./LaunchListItem";

import AppStyle from "../../style/App.module.scss";

interface LaunchSearchVariables {
	limit: number;
	offset: number;
}

const GET_ALL_LAUNCHES = gql`
	query GET_ALL_LAUNCHES($limit: Int, $offset: Int) {
		launches(limit: $limit, offset: $offset) {
			mission_name
			rocket {
				rocket_name
				rocket_type
			}
			id
			launch_date_utc
			links {
				flickr_images
				wikipedia
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
	const PAGE_LENGTH = 10;

	const [pageOffset, setPageOffset] = useState(0);

	const { loading, error, data } = useQuery<
		LaunchesData,
		LaunchSearchVariables
	>(GET_ALL_LAUNCHES, {
		variables: { limit: PAGE_LENGTH, offset: pageOffset },
	});

	function incrementPage() {
		setPageOffset((os) => os + PAGE_LENGTH);
	}

	function decrementPage() {
		setPageOffset((os) => os - PAGE_LENGTH);
	}

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
			{pageOffset > 0 && (
				<button
					className={AppStyle.pagination_button_base}
					onClick={decrementPage}>
					{"<"}
				</button>
			)}
			{data && data.launches.length === PAGE_LENGTH && (
				<button
					className={AppStyle.pagination_button_right}
					onClick={incrementPage}>
					{">"}
				</button>
			)}
		</div>
	);
};

export default LaunchList;
