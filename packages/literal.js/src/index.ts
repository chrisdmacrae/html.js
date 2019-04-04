import { virtualCompilerFactory } from "@literal.js/core/lib/compilerFactory";
import DSL from "@literal.js/core/lib/dsl";
import { default as renderFunc } from "@literal.js/core/lib/render";
import HTMLDSL from "@literal.js/dsl-html";
import CSSDSL from "@literal.js/dsl-css";

export const html = virtualCompilerFactory(HTMLDSL);
export const css = virtualCompilerFactory(CSSDSL);
export const compile = (DSL: DSL) => virtualCompilerFactory(DSL);
export const render = renderFunc;

export default html;
