import compilerFactory from "@html.js/core/lib/compilerFactory";
import DSL from "@html.js/core/lib/dsl";
import HtmlDSL from "@html.js/dsl-html";
import { default as renderFunc } from "@html.js/core/lib/render";

export const html = compilerFactory(HtmlDSL);
export const render = renderFunc;
export const compile = (DSL: DSL) => compilerFactory(DSL);

export default html;
