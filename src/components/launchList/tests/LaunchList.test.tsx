// Packages
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

// Component
import LaunchList from "../LaunchList";

// Data
import { SAMPLE_RESPONSE } from "./sampleData";
import { GET_ALL_LAUNCHES_QUERY } from "../LaunchListQueries";

const mocks: any[] = [
	{
		request: {
			query: GET_ALL_LAUNCHES_QUERY,
			variables: {
				limit: 10,
				offset: 0,
			},
		},
		result: SAMPLE_RESPONSE,
	},
];

describe("<LaunchList />", () => {
	beforeEach(() => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<LaunchList />
			</MockedProvider>
		);
	});

	afterEach(cleanup);

	it("should render without crashing", async () => {
		waitFor(() => {
			const launchList = screen.getByTestId("launch-list");
			expect(launchList).toBeInTheDocument();
		});
	});

	it("should render the correct number of <LaunchListItem /> components", async () => {
		waitFor(async () => {
			const listItems = await screen.findAllByTestId("launch-list-item");
			expect(listItems).toHaveLength(10);
		});
	});
});
