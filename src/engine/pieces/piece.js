import Square from "../square";

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
    return (
      !!otherPiece &&
      otherPiece.player !== this.player &&
      otherPiece.pieceType !== "King"
    );
  }

  checkInDirection(board, startSquare, rowChange, colChange, availableMoves) {
    let checkSquare = Square.copyWithOffset(startSquare, rowChange, colChange);
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

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this);
    board.movePiece(currentSquare, newSquare);
  }
}
