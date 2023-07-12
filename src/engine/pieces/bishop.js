import Piece from "./piece";
import Square from "../square";

export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  checkInDirection(board, startSquare, rowChange, colChange, available_moves) {
    let checkSquare = Square.copy(startSquare);
    checkSquare.row += rowChange;
    checkSquare.col += colChange;
    while (board.isInBounds(checkSquare)) {
      let pieceAtSquare = board.getPiece(checkSquare);
      if (!!pieceAtSquare) {
        if (this.canCapture(pieceAtSquare))
          available_moves.push(Square.copy(checkSquare));
        break;
      }
      available_moves.push(Square.copy(checkSquare));
      checkSquare.row += rowChange;
      checkSquare.col += colChange;
    }
  }

  getAvailableMoves(board) {
    let piece_square = board.findPiece(this);
    let available_moves = [];
    // Checking in the +1,+1 direction
    this.checkInDirection(board, piece_square, 1, 1, available_moves);
    // Checking in the +1,-1 direction
    this.checkInDirection(board, piece_square, 1, -1, available_moves);
    // Checking in the -1,+1 direction
    this.checkInDirection(board, piece_square, -1, 1, available_moves);
    // Checking in the -1,-1 direction
    this.checkInDirection(board, piece_square, -1, -1, available_moves);

    return available_moves;
  }
}
