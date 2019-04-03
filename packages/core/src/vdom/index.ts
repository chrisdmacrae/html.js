import * as jsdom from "jsdom";

export const createVdom = () => {
  return new jsdom.JSDOM();
};

/**
 * Creates a virtual dom instance with jsdom to enable support
 * in a node environment
 */
export const vdom = createVdom();

export default vdom;
