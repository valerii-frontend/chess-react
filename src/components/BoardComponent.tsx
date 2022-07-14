import React, { FC, Fragment, useState } from "react";
import Board from "../models/Board";
import CellComponent from "./CellComponent";
import Cell from "../models/Cell";

interface BoardProps {
	board: Board;
	setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	function onClickHandler(cell: Cell) {
		if (cell.figure) {
			setSelectedCell(cell);
		}

		const highlightCells = () => {
			board.highlightCells(selectedCell);
		};

		function updateBoard() {
			const newBoard = board.getCopyBoard();
			setBoard(newBoard);
		}
	}
	return (
		<div className='board'>
			{board.cells.map((row, index) => (
				<Fragment key={index}>
					{row.map((cell) => (
						<CellComponent
							click={onClickHandler}
							cell={cell}
							key={cell.id}
							selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}></CellComponent>
					))}
				</Fragment>
			))}
		</div>
	);
};

export default BoardComponent;
