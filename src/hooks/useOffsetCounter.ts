import React, { useState } from "react";

export const useOffsetCounter = (initialVal: number, pageLength: number) => {
	const [pageOffset, setPageOffset] = useState(initialVal);

	function incrementPage() {
		setPageOffset((os) => os + pageLength);
	}

	function decrementPage() {
		setPageOffset((os) => os - pageLength);
	}

	return { pageOffset, incrementPage, decrementPage };
};
