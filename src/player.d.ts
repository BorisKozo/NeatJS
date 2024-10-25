// Player.d.ts

import { Genome } from './genome';

export class Player {
  constructor(id: number);

  brain: Genome;
  fitness: number;
  score: number;
  lifespan: number;
  dead: boolean;
  decisions: number[];
  vision: number[];
  val: number;
  correctVal: number;

  clone(): Player;
  crossover(parent: Player): Player;
  look(): void;
  think(): void;
  move(): void;
  update(): void;
  show(): void;
  calculateFitness(): void;
}
