// Genome.d.ts

import { Node } from './node';
import { Connection } from './connection';

export class Genome {
  constructor(inp: number, out: number, id: number, offSpring?: boolean);

  inputs: number;
  outputs: number;
  id: number;
  layers: number;
  nextNode: number;

  nodes: Node[];
  connections: Connection[];

  generateNetwork(): void;
  feedForward(inputValues: number[]): number[];
  crossover(partner: Genome): Genome;
  mutate(): void;
  addNode(): void;
  addConnection(): void;
  commonConnection(innN: number, connections: Connection[]): number;
  nodesConnected(node1: Node, node2: Node): boolean;
  fullyConnected(): boolean;
  sortByLayer(): void;
  clone(): Genome;
  getNode(x: number): number;
  calculateWeight(): number;
  draw(width?: number, height?: number, container?: string): void;
}
