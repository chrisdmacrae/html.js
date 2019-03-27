import JsDom, { JSDOM } from "jsdom";

export default class DOM {
    private domOptions: JsDom.ConstructorOptions;
    private dom: JsDom.JSDOM;
    public window: Window;
    public document: Document;
    public console: JsDom.VirtualConsole;

    constructor(html: string | null = null, options?: JsDom.ConstructorOptions) {
        this.console = new JsDom.VirtualConsole();
        this.domOptions = this.getDomOptions(options);
        this.dom = new JSDOM(html, this.domOptions);
        this.window = this.dom.window;
        this.document = this.window.document;

        this.bindConsole();
    }

    private bindConsole() {
        this.console.sendTo(console);
    }

    private getDomOptions(options) {
        const defaultOptions = {
            runScripts: "dangerously",
            resources: "usable",
            virtualConsole: this.console,
            beforeParse: this.handleBeforeParse
        }

        return Object.assign(defaultOptions, options);
    }

    private handleBeforeParse(window) {
        this.loadPolyfills();
    }

    private loadPolyfills() {
        // TODO
    }
}