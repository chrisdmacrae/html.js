import { DSL } from "@literal.js/core/lib/dsl";
import { Part } from "@literal.js/core/lib/Part";

export default class HTMLDSL implements DSL {
  readonly template: string;
  readonly parts: Part[];

  constructor(template: string, parts: Part[]) {
    this.template = template;
    this.parts = parts;
  }

  compile() {
    return this.createFragement(this.template);
  }

  private createFragement(template: string) {
    const frag = document.createRange().createContextualFragment(template);

    return frag;
  }
}
