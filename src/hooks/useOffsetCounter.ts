import { useState } from "react";

export const useOffsetCounter = (initialVal: number, pageLength: number) => {
	const [pageOffset, setPageOffset] = useState<number>(initialVal);

	function incrementPage() {
		setPageOffset((os) => os + pageLength);
	}

	function decrementPage() {
		setPageOffset((os) => os - pageLength);
	}

	function resetPage() {
		setPageOffset(initialVal);
	}

	return { pageOffset, incrementPage, decrementPage, resetPage };
};
