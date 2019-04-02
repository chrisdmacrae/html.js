import { Literal } from "estree";
import { Part } from "./parts/Part";

// Store template representation in a memory map for re-use
const templates = new Map();

/**
 * Generates a representation of a tagged template literal to be used
 * by the compiler factory to generate a DSL representaton
 *
 * @param literals An array of string literals. They are always at least two.
 * @param expressions An array of the expressions found in the template literal
 */
export const literalFactory = (literals: Literal[], ...expressions: any) => {
  const template = createLiteralTemplate(literals, expressions);
  const parts = getLiteralParts(expressions);

  return {
    template: template,
    parts: parts
  };
};

/**
 * Creates a template of a literal by replacing the expressions with a
 * replacement token and trimming the resulting template
 *
 * @param literals The string literals
 * @param expressions The expressions found in the template literal
 */
export const createLiteralTemplate = (
  literals: Literal[],
  expressions: any
) => {
  let id = createLiteralTemplateId(literals, expressions.length);
  let template = templates.get(id);

  if (!template) {
    let templateParts: (string | Literal)[] = [];

    for (let i = 1; i <= literals.length; i++) {
      if (i < literals.length) {
        templateParts.push(literals[i - 1]);
        templateParts.push(`{{${i}}}`);
      } else {
        templateParts.push(literals[i - 1]);
      }
    }

    template = templateParts.join("").trim();

    templates.set(id, template);
  }

  return template;
};

/**
 * Generates a unique ID for a template to allow for re-use
 *
 * @param literals The string literals
 * @param totalExpressions The total number of expressions
 */
const createLiteralTemplateId = (
  literals: Literal[],
  totalExpressions: number
) => {
  return literals.join().concat(String(totalExpressions));
};

const getLiteralParts = (parts: Part[]) => {
  return [];
};

export default literalFactory;
