import Piece from "./piece";
import Square from "../square";

export default class Rook extends Piece {
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
    // Checking in the +1,0 direction
    this.checkInDirection(board, pieceSquare, 1, 0, availableMoves);
    // Checking in the -1,0 direction
    this.checkInDirection(board, pieceSquare, -1, 0, availableMoves);
    // Checking in the 0,+1 direction
    this.checkInDirection(board, pieceSquare, 0, 1, availableMoves);
    // Checking in the 0,-1 direction
    this.checkInDirection(board, pieceSquare, 0, -1, availableMoves);

    return availableMoves;
  }
}
