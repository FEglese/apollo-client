import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";

const apolloClient = new ApolloClient({
	uri: "https://api.spacex.land/graphql/",
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
