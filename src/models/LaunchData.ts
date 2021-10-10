export interface LaunchData {
	mission_name: string;
	rocket: {
		rocket_name: string;
		rocket_type: string;
	};
	id: string;
	details: string;
	launch_date_utc: Date;
	links: {
		wikipedia: string;
		flickr_images: string[];
	};
	launch_site: {
		site_id: string;
		site_name_long: string;
	};
	launch_success: boolean;
}

export interface LaunchesData {
	launches: LaunchData[];
}
