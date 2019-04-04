import { Literal } from "estree";
import literalFactory from "./literalFactory";
import { Part } from "./Part";
import DSL from "./dsl";

/**
 * Generates a compile factory for a given DSL
 *
 * @param DSL The DSL the compiler factory uses to generate output
 */
export const compilerFactory = (DSLInstance: DSL): unknown => {
  const compile = (template: string, parts: Part[]) => {
    const compiler = new DSLInstance(template, parts);

    return compiler.compile();
  };

  return (literals: Literal[], ...expressions: any) => {
    const literal = literalFactory(literals, ...expressions);

    return compile(literal.template, literal.parts);
  };
};

/**
 * Generates a compiler instance with a virtual DOM
 *
 * @param DSLInstance The DSL the compiler factory uses to generate output
 */
export const virtualCompilerFactory = (DSLInstance: DSL) => {
  const jsdom = require("jsdom");
  const vdom = new jsdom.JSDOM();
  const window = vdom.window;

  window.compile = compilerFactory(DSLInstance);

  return window.compile;
};
