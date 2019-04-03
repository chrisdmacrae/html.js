import compilerFactory from "@literal.js/core/lib/compilerFactory";
import DSL from "@literal.js/core/lib/dsl";
import HtmlDSL from "@literal.js/dsl-html";
import { default as renderFunc } from "@literal.js/core/lib/render";

export const html = compilerFactory(HtmlDSL);
export const render = renderFunc;
export const compile = (DSL: DSL) => compilerFactory(DSL);

export default html;
