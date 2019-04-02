/**
 *
 * @param element The element(s) to render to the DOM
 * @param target The target element or element selector to inject the element
 *   into
 */
export const render = (
  element: Node | NodeList | string,
  target: Element | string
) => {
  let el: Element | null;

  if (typeof target === "string") {
    el = document.querySelector(target);
  } else {
    el = target;
  }

  if (el) {
    //return el.append();
  }

  return el;
};

export default render;
