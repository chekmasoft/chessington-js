export default class Square {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  static at(row, col) {
    return new Square(row, col);
  }

  static copyWithOffset(square, rowChange, colChange) {
    return new Square(square.row + rowChange, square.col + colChange);
  }

  static copy(square) {
    return this.copyWithOffset(square, 0, 0);
  }

  equals(otherSquare) {
    return (
      !!otherSquare &&
      this.row === otherSquare.row &&
      this.col === otherSquare.col
    );
  }

  toString() {
    return `Row ${this.row}, Col ${this.col}`;
  }
}
