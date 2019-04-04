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
    return this.createTemplateEl(this.template);
  }

  private createTemplateEl(template: string) {
    const templateEl = document.createElement("template");

    templateEl.innerHTML = template;

    console.log(templateEl);

    return document.importNode(templateEl.content, true);
  }
}
