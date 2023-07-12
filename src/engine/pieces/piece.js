export default class Piece {
  constructor(player) {
    this.player = player;
    this.pieceType = this.constructor.name;
  }

  getAvailableMoves(board) {
    throw new Error(
      "This method must be implemented, and return a list of available moves"
    );
  }

  canCapture(otherPiece) {
    return otherPiece.player !== this.player && otherPiece.pieceType !== "King";
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this);
    board.movePiece(currentSquare, newSquare);
  }
}
