import Piece from "./piece";

export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let pieceSquare = board.findPiece(this);
    let availableMoves = [];
    // Checking in the +1,+1 direction
    this.checkInDirection(board, pieceSquare, 1, 1, availableMoves);
    // Checking in the +1,-1 direction
    this.checkInDirection(board, pieceSquare, 1, -1, availableMoves);
    // Checking in the -1,+1 direction
    this.checkInDirection(board, pieceSquare, -1, 1, availableMoves);
    // Checking in the -1,-1 direction
    this.checkInDirection(board, pieceSquare, -1, -1, availableMoves);

    return availableMoves;
  }
}
