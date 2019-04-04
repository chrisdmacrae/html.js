import jsdom, { VirtualConsole } from "jsdom";

export const domFactory = (options?: jsdom.Options) => {
  const dom = new jsdom.JSDOM(undefined, {
    runScripts: "dangerously",
    virtualConsole: new VirtualConsole().sendTo(console)
  });

  return {
    dom: dom,
    window: dom.window,
    document: dom.window.document
  };
};

export default domFactory;
