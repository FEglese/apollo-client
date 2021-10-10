import { gql, useQuery } from "@apollo/client";

// Models
import { LaunchesData, LaunchData } from "../../models/LaunchData";

// Components
import LaunchListItem from "./LaunchListItem";

// Hooks
import { useOffsetCounter } from "../../hooks/useOffsetCounter";
import { PaginationButtons } from "../paginationButtons/PaginationButtons";

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
			details
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

	// This isn't ideal. If the amount of entries in the db is divisible by
	// the page length, then the final page would have a next button
	// despite there not being any data on the next page
	const displayPaginationNextButton =
		(data && data.launches.length === PAGE_LENGTH) ?? false;

	if (loading) {
		return <h3>Loading Data</h3>;
	}

	if (error) {
		return <h3>Error loading data: {error.message}</h3>;
	}

	return (
		<div data-testid="launch-list">
			{data &&
				data.launches.map((launch: LaunchData) => (
					<LaunchListItem key={launch.id} launch={launch} />
				))}

			<PaginationButtons
				pageOffset={pageOffset}
				displayNextButton={displayPaginationNextButton}
				increment={incrementPage}
				decrement={decrementPage}
			/>
		</div>
	);
};

export default LaunchList;
