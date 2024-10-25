// connection.d.ts

import { Node } from './node';

export class Connection {
  constructor(from: Node, to: Node, weight: number);

  fromNode: Node;
  toNode: Node;
  weight: number;
  enabled: boolean;

  mutateWeight(): void;
  clone(): Connection;
  getInnovationNumber(): number;
}
