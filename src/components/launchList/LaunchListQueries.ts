import { gql } from "@apollo/client";

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

export const GET_ALL_LOCATIONS_QUERY = gql`
	{
		launches {
			launch_site {
				site_name_long
				site_id
			}
		}
	}
`;
