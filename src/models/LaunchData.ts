export interface LaunchData {
	mission_name: string;
	rocket: {
		rocket_name: string;
		rocket_type: string;
	};
	id: string;
	launch_date_utc: Date;
	links: {
		flickr_images: string[];
	};
	details: string;
	launch_side: {
		site_id: string;
		site_name_long: string;
	};
	launch_success: boolean;
}

export interface LaunchesData {
	launches: LaunchData[];
}
