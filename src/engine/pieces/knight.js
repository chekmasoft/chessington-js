import Piece from "./piece";
import Square from "../square";

export default class Knight extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let pieceSquare = board.findPiece(this);
    let available_moves = [];
    for (let rowChange = -2; rowChange <= 2; rowChange++) {
      for (let colChange = -2; colChange <= 2; colChange++) {
        if (Math.abs(rowChange * colChange) !== 2) continue;
        let checkSquare = Square.copy(pieceSquare);
        checkSquare.row += rowChange;
        checkSquare.col += colChange;
        if (!board.isInBounds(checkSquare)) continue;
        let pieceAtSquare = board.getPiece(checkSquare);
        if (!!pieceAtSquare && !this.canCapture(pieceAtSquare)) continue;
        available_moves.push(checkSquare);
      }
    }
    return available_moves;
  }
}
