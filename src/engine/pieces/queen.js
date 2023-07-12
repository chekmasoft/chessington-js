import Piece from "./piece";

export default class Queen extends Piece {
  constructor(player) {
    super(player);
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
