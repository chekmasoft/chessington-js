export default class Square {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  static at(row, col) {
    return new Square(row, col);
  }

  static copy(other) {
    return new Square(other.row, other.col);
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
