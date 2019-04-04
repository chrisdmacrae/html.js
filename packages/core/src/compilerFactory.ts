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

export default compilerFactory;
