import { Literal } from "estree";
import literalFactory from "./literalFactory";
import { Part } from "./Part";
import DSL from "./dsl";

declare const CONTEXT_BROWSER: boolean;
declare const CONTEXT_NODE: boolean;

let compilerFactoryForContext;

/**
 * Generates a compile factory for a given DSL
 *
 * @param DSL The DSL the compiler factory uses to generate output
 */
const compilerFactory = (DSLInstance: DSL): unknown => {
  const compile = (template: string, parts: Part[]) => {
    const compiler = new DSLInstance(template, parts);

    return compiler.compile();
  };

  return (literals: Literal[], ...expressions: any) => {
    const literal = literalFactory(literals, ...expressions);

    return compile(literal.template, literal.parts);
  };
};

if (CONTEXT_BROWSER) {
  compilerFactoryForContext = compilerFactory;
}

if (CONTEXT_NODE) {
  compilerFactoryForContext = async () => {
    const JSDOM = await import("./vdom/index");

    const vdom = new JSDOM();

    window = vdom.window;
    document = window.document;

    return compilerFactory;
  };
}

export default compilerFactoryForContext;
