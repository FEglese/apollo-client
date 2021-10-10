import { useOffsetCounter } from "../useOffsetCounter";
import { act, renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/dom";

describe("useOffsetCounter", () => {
	it("increments by page length", async () => {
		const { result } = renderHook((initialVal = 0, pageLength = 10) => {
			return useOffsetCounter(initialVal as number, pageLength);
		});

		await waitFor(() => {
			act(() => {
				result.current.incrementPage();
			});

			expect(result.current.pageOffset).toBe(10);

			act(() => {
				result.current.incrementPage();
			});

			expect(result.current.pageOffset).toBe(20);
		});
	});
});

it("decrements by page length", async () => {
	const { result } = renderHook((initialVal = 100, pageLength = 10) => {
		return useOffsetCounter(initialVal as number, pageLength);
	});

	await waitFor(() => {
		act(() => {
			result.current.decrementPage();
		});

		expect(result.current.pageOffset).toBe(90);

		act(() => {
			result.current.decrementPage();
		});

		expect(result.current.pageOffset).toBe(80);
	});
});
