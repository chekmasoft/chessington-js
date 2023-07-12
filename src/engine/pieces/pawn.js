import Piece from "./piece";
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let pieceSquare = board.findPiece(this);
    let availableMoves = [];
    let checkDirection = this.player === Player.WHITE ? 1 : -1;
    let secondRow = (this.player === Player.WHITE ? 1 : 6) === pieceSquare.row;

    // Check square directly ahead
    let checkSquare = Square.copyWithOffset(pieceSquare, checkDirection, 0);
    if (board.isInBounds(checkSquare) && !board.getPiece(checkSquare)) {
      availableMoves.push(checkSquare);
      // Check square 2 squares ahead
      checkSquare = Square.copyWithOffset(pieceSquare, 2 * checkDirection, 0);
      if (secondRow && !board.getPiece(checkSquare))
        availableMoves.push(checkSquare);
    }

    // Check squares on diagonal left and right
    checkSquare = Square.copyWithOffset(pieceSquare, checkDirection, 1);
    if (
      board.isInBounds(checkSquare) &&
      this.canCapture(board.getPiece(checkSquare))
    )
      availableMoves.push(checkSquare);
    checkSquare = Square.copyWithOffset(pieceSquare, checkDirection, -1);
    if (
      board.isInBounds(checkSquare) &&
      this.canCapture(board.getPiece(checkSquare))
    )
      availableMoves.push(checkSquare);

    //Checking for en passant:
    if (board.history.length != 0) {
      let lastMove = board.history.at(-1);
      if (
        lastMove.piece.pieceType === "Pawn" &&
        Math.abs(lastMove.from.row - lastMove.to.row) === 2 &&
        Math.abs(lastMove.to.col - pieceSquare.col) === 1
      ) {
        availableMoves.push(
          Square.copyWithOffset(lastMove.to, checkDirection, 0)
        );
      }
    }
    return availableMoves;
  }
}
