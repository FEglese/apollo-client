import Style from "../../style/PaginationButtons.module.scss";

export interface PaginationButtonsProps {
	pageOffset: number;
	displayNextButton: boolean;
	decrement: () => void;
	increment: () => void;
}

const PaginationButtons = (props: PaginationButtonsProps) => {
	return (
		<>
			{props.pageOffset > 0 && (
				<button
					data-testid="launch-list-previous-page-button"
					className={Style.pagination_button_base}
					onClick={props.decrement}>
					{"<"}
				</button>
			)}
			{props.displayNextButton && (
				<button
					data-testid="launch-list-next-page-button"
					className={Style.pagination_button_right}
					onClick={props.increment}>
					{">"}
				</button>
			)}
		</>
	);
};

export default PaginationButtons;
