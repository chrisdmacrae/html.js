import domFactory from "./domFactory";

declare global {
  namespace NodeJS {
    interface Global {
      window: Window | undefined;
      document: Document | undefined;
    }
  }
}

export const setup = () => {
  let window: Window;

  if (!global.window) {
    let { dom } = domFactory();
    window = dom.window;
    global.window = window;
    global.document = window.document;
  }
};

export const teardown = () => {
  if (global.window) {
    global.window = undefined;
  }

  if (global.document) {
    global.document = undefined;
  }
};
