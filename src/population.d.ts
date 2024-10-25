// Population.d.ts

import { Player } from './player';

export class Population {
  constructor(size: number);

  population: Player[];
  bestPlayer: Player;
  bestFitness: number;
  generation: number;
  matingPool: number[];

  updateAlive(): void;
  done(): boolean;
  naturalSelection(): void;
  calculateFitness(): void;
  fillMatingPool(): void;
  selectPlayer(): Player;
  getAverageScore(): number;
}
