import React, { FC } from "react";
import Cell from "../models/Cell";

interface CellProps {
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
	const cellStyles = [
		"cell",
		cell.color,
		selected ? "selected" : "",
		cell.figure && cell.available ? "onAttack" : null,
		cell?.figure ? "cursor" : "",
	];
	return (
		<div className={cellStyles.join(" ")} onClick={() => click(cell)}>
			{!cell.figure && cell.available && <div className='available'></div>}
			{cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
		</div>
	);
};

export default CellComponent;
