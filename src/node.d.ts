// Node.d.ts

export class Node {
  constructor(num: number, lay: number, isOutput?: boolean);

  number: number;
  layer: number;
  activationFunction: number;
  bias: number;
  output: boolean;

  inputSum: number;
  outputValue: number;
  outputConnections: Connection[];

  engage(): void;
  mutateBias(): void;
  mutateActivation(): void;
  isConnectedTo(node: Node): boolean;
  clone(): Node;
  activation(x: number): number;
}
