import { useQuery } from "@apollo/client";
import { useState } from "react";

// Models
import { LaunchesData, LaunchData } from "../../models/LaunchData";

// Query strings
import { GET_ALL_LAUNCHES_QUERY } from "./LaunchListQueries";

// Components
import LaunchListItem from "./LaunchListItem";
import LaunchSearch from "./LaunchSearch";
import PaginationButtons from "../paginationButtons/PaginationButtons";

// Hooks
import { useOffsetCounter } from "../../hooks/useOffsetCounter";

interface LaunchSearchVariables {
	limit: number;
	offset: number;
	site_id: string;
}

const LaunchList = () => {
	const PAGE_LENGTH = 10;

	// Hooks
	const { pageOffset, incrementPage, decrementPage, resetPage } =
		useOffsetCounter(0, PAGE_LENGTH);

	const [locationId, setLocationId] = useState("");

	const { loading, error, data } = useQuery<
		LaunchesData,
		LaunchSearchVariables
	>(GET_ALL_LAUNCHES_QUERY, {
		variables: {
			limit: PAGE_LENGTH,
			offset: pageOffset,
			site_id: locationId,
		},
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
			<LaunchSearch
				locationId={locationId}
				setLocationId={setLocationId}
				resetPageNumber={resetPage}
			/>

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
