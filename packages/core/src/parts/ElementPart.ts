import { Part, PartType } from "./Part";

export default class AttrPart implements Part {
  readonly type = PartType["ELEMENT"];
  readonly value: unknown;
  readonly expression: any;

  constructor(expression: any) {
    this.expression = expression;
  }

  public get() {}
  public set() {}
  public update() {}
}
