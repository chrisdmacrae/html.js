import { DSL } from "@literal.js/core/lib/dsl";
import { Part } from "@literal.js/core/lib/Part";

export default class CSSDSL implements DSL {
  readonly template: string;
  public parts: Part[];
  private _parts: Part[];

  constructor(template: string, parts: Part[]) {
    this.template = template;
    this._parts = parts;
    this.parts = [];
  }

  compile() {
    return this.template;
  }
}
