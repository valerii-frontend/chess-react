import { Cell } from "./Cell.1";
import { Colors } from "./Colors";

export class Board {
	cells: Cell[][] = [];

	public initCells() {
		for (let i = 0; i < 8; i++) {
			const row: Cell[] = [];
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0) {
					row.push(new Cell(this.cells, j, i, Colors.BlACK, null)); // black
				} else {
					row.push(new Cell(this.cells, j, i, Colors.WHITE, null)); // white
				}
				this.cells.push(row);
			}
		}
	}
}
