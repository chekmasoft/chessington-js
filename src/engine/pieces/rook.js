import Piece from "./piece";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
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
