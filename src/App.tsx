import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./models/Board";
import BoardComponent from "./components/BoardComponent";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";
// 59m
function App() {
	const [board, setBoard] = useState(new Board());

	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

	useEffect(() => {
		restart();
	}, []);

	function restart() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
		setCurrentPlayer(whitePlayer);
	}

	function swapPlayer() {
		setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
	}
	return (
		<div className='app'>
			<BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} />
		</div>
	);
}

export default App;
