import { Part } from "./parts/Part";

export interface DSL {
  readonly template: string;
  readonly parts: Part[];

  compile: () => unknown;
}

export interface DSLConstructor {
  new (template: string, parts: Part[]): DSL;
}

export default DSLConstructor;
