import { gql, useQuery } from "@apollo/client";

// Models
import { LaunchesData, LaunchData } from "../../models/LaunchData";

// Components
import LaunchListItem from "./LaunchListItem";

// Style
import AppStyle from "../../style/App.module.scss";

// Hooks
import { useOffsetCounter } from "../../hooks/useOffsetCounter";

interface LaunchSearchVariables {
	limit: number;
	offset: number;
}

export const GET_ALL_LAUNCHES_QUERY = gql`
	query GET_ALL_LAUNCHES($limit: Int, $offset: Int) {
		launches(
			limit: $limit
			offset: $offset
			sort: "launch_date_utc"
			order: "desc"
		) {
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

	const { pageOffset, incrementPage, decrementPage } = useOffsetCounter(
		0,
		PAGE_LENGTH
	);

	const { loading, error, data } = useQuery<
		LaunchesData,
		LaunchSearchVariables
	>(GET_ALL_LAUNCHES_QUERY, {
		variables: { limit: PAGE_LENGTH, offset: pageOffset },
	});

	if (loading) {
		return <h3>Loading Data</h3>;
	}

	if (error) {
		return <h3>Error loading data: {error.message}</h3>;
	}

	// Would prefer the next/previous buttons in a seperate pagination component
	return (
		<div data-testid="launch-list">
			{data &&
				data.launches.map((launch: LaunchData) => (
					<LaunchListItem key={launch.id} launch={launch} />
				))}
			{pageOffset > 0 && (
				<button
					data-testid="launch-list-previous-page-button"
					className={AppStyle.pagination_button_base}
					onClick={decrementPage}>
					{"<"}
				</button>
			)}
			{data && data.launches.length === PAGE_LENGTH && (
				<button
					data-testid="launch-list-next-page-button"
					className={AppStyle.pagination_button_right}
					onClick={incrementPage}>
					{">"}
				</button>
			)}
		</div>
	);
};

export default LaunchList;
