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
		selected && cell.figure ? "selected" : null,
		cell.figure && cell.available ? "onAttack" : null,
		cell?.figure ? "cursor" : null,
		!cell.figure && cell.available && "available",
	];
	return (
		<div className={cellStyles.join(" ")} onClick={() => click(cell)}>
			{cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
		</div>
	);
};

export default CellComponent;
