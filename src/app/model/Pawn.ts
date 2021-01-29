import { Board } from './Board';
import { BOARDSIZE } from './Constances';
import { Piece } from './Piece';
import { PieceMovement } from './PieceMovement';
import { Column, columns, Row, Side, Square } from './Types';

export class Pawn extends Piece implements PieceMovement {
  constructor(id: string, side: Side) {
    super(id, side);
  }

  possibleMoves(position: Square, board: Board): Square[] {
    let movesToGo: Square[] = [] as Square[];
    movesToGo = movesToGo.concat(this.goAhead(position, board), this.goDoubleAhead(position, board), this.goDiagonalAhead(position, board));
    return movesToGo;
  }
}
