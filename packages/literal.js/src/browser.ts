import { compilerFactory } from "@literal.js/core/lib/compilerFactory";
import DSL from "@literal.js/core/lib/dsl";
import renderFactory, { Render } from "@literal.js/core/lib/renderFactory";
import HTMLDSL from "@literal.js/dsl-html";
import CSSDSL from "@literal.js/dsl-css";

export const html = compilerFactory(HTMLDSL);
export const css = compilerFactory(CSSDSL);
export const compile = (DSL: DSL) => compilerFactory(DSL);
export const render = (element: Render["element"], target: Render["target"]) =>
  renderFactory(element, target);

export default html;
