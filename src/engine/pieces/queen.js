import Piece from "./piece";
import Square from "../square";

export default class Queen extends Piece {
  constructor(player) {
    super(player);
  }

  checkInDirection(board, startSquare, rowChange, colChange, availableMoves) {
    let checkSquare = Square.copy(startSquare);
    checkSquare.row += rowChange;
    checkSquare.col += colChange;
    while (board.isInBounds(checkSquare)) {
      let pieceAtSquare = board.getPiece(checkSquare);
      if (!!pieceAtSquare) {
        if (this.canCapture(pieceAtSquare))
          availableMoves.push(Square.copy(checkSquare));
        break;
      }
      availableMoves.push(Square.copy(checkSquare));
      checkSquare.row += rowChange;
      checkSquare.col += colChange;
    }
  }

  getAvailableMoves(board) {
    let pieceSquare = board.findPiece(this);
    let availableMoves = [];
    for (let rowChange = -1; rowChange <= 1; rowChange++) {
      for (let colChange = -1; colChange <= 1; colChange++) {
        if (rowChange == 0 && colChange == 0) continue;
        this.checkInDirection(
          board,
          pieceSquare,
          rowChange,
          colChange,
          availableMoves
        );
      }
    }

    return availableMoves;
  }
}
