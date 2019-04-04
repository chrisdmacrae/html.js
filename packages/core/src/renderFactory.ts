export interface Render {
  element: Node | NodeList | String;
  target: Element | string;
}

/**
 *
 * @param element The element(s) to render to the DOM
 * @param target The target element or element selector to inject the element
 *   into
 * @param window The document window context the render should occur in
 */
export const renderFactory = (
  element: Render["element"],
  target: Render["target"]
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

export default renderFactory;
