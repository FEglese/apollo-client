import Style from "../../style/PaginationButtons.module.scss";

export interface PaginationButtonsParams {
	pageOffset: number;
	displayNextButton: boolean;
	decrement: () => void;
	increment: () => void;
}

const PaginationButtons = (params: PaginationButtonsParams) => {
	return (
		<>
			{params.pageOffset > 0 && (
				<button
					data-testid="launch-list-previous-page-button"
					className={Style.pagination_button_base}
					onClick={params.decrement}>
					{"<"}
				</button>
			)}
			{params.displayNextButton && (
				<button
					data-testid="launch-list-next-page-button"
					className={Style.pagination_button_right}
					onClick={params.increment}>
					{">"}
				</button>
			)}
		</>
	);
};

export default PaginationButtons;
