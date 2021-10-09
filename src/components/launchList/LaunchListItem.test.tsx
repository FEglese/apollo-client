// Packages
import { render, screen } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";

// Component
import LaunchListItem from "./LaunchListItem";

// Models & Interfaces
import { LaunchData } from "../../models/LaunchData";

const launchProps1: LaunchData = {
	id: "123",
	mission_name: "Test Mission 1",
	rocket: {
		rocket_name: "Falcon 1",
		rocket_type: "v2",
	},
	launch_date_utc: new Date(),
	links: {
		flickr_images: [],
	},
	details: "",
	launch_side: {
		site_id: "cap_1",
		site_name_long: "Captain Launch Station",
	},
	launch_success: true,
};

const launchProps2: LaunchData = {
	id: "456",
	mission_name: "Test Mission 2",
	rocket: {
		rocket_name: "Falcon 3",
		rocket_type: "v7",
	},
	launch_date_utc: new Date(),
	links: {
		flickr_images: [],
	},
	details: "",
	launch_side: {
		site_id: "cap_1",
		site_name_long: "Captain Launch Station",
	},
	launch_success: false,
};

describe("<LaunchListItem />", () => {
	it("should render without crashing", () => {
		render(<LaunchListItem launch={launchProps1} />);
		const listItem = screen.getByTestId("launch-list-item");
		expect(listItem).toBeInTheDocument();
	});

	it("has the correct mission name", () => {
		render(<LaunchListItem launch={launchProps1} />);
		const launchName = screen.getByTestId("launch-list-item-name");
		expect(launchName).toHaveTextContent("Test Mission 1");
	});

	it("has the correct rocket name formatted", () => {
		render(<LaunchListItem launch={launchProps1} />);
		const rocketDetails = screen.getByTestId("launch-list-item-rocket");
		expect(rocketDetails).toHaveTextContent("Falcon 1 - v2");
	});

	it("shows that the launch failed with a cross emoji", () => {
		render(<LaunchListItem launch={launchProps1} />);
		const suceessItem = screen.getByTestId("launch-list-item-success");
		expect(suceessItem).toHaveTextContent("Success: ✅");
	});

	it("shows that the launch failed with a cross emoji", () => {
		render(<LaunchListItem launch={launchProps2} />);
		const suceessItem = screen.getByTestId("launch-list-item-success");
		expect(suceessItem).toHaveTextContent("Success: ❌");
	});
});
