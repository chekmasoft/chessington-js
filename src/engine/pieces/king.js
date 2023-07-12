import Square from "../square";
import Piece from "./piece";

export default class King extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let pieceSquare = board.findPiece(this);
    let availableMoves = [];
    for (let rowChange = -1; rowChange <= 1; rowChange++) {
      for (let colChange = -1; colChange <= 1; colChange++) {
        if (rowChange == 0 && colChange == 0) continue;
        let checkSquare = Square.copyWithOffset(
          pieceSquare,
          rowChange,
          colChange
        );
        if (!board.isInBounds(checkSquare)) continue;
        let pieceAtSquare = board.getPiece(checkSquare);
        if (!!pieceAtSquare && !this.canCapture(pieceAtSquare)) continue;
        availableMoves.push(checkSquare);
      }
    }
    return availableMoves;
  }
}
