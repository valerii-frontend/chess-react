import React, { FC, Fragment, useState, useEffect } from "react";
import Board from "../models/Board";
import CellComponent from "./CellComponent";
import Cell from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps {
	board: Board;
	setBoard: (board: Board) => void;
	currentPlayer: Player | null;
	swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

	function onClickHandler(cell: Cell) {
		if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell);
			swapPlayer();
			setSelectedCell(null);
		} else {
			if (cell.figure?.color === currentPlayer?.color) {
				setSelectedCell(cell);
			}
		}
	}

	useEffect(() => {
		highlightCells();
	}, [selectedCell]);

	const highlightCells = () => {
		board.highlightCells(selectedCell);
		updateBoard();
	};

	const updateBoard = () => {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	};

	return (
		<div>
			<h3 className={`${currentPlayer?.color === "black" ? "header-black" : "header-white"} header`}>
				{currentPlayer?.color === "black" ? "Black" : "White"} <span>to move</span>
			</h3>
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
		</div>
	);
};

export default BoardComponent;
