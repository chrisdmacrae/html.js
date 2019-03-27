import customElementFactory from "./customElement";
import { throws } from "assert";

export default class TemplateLiteral {
    public tag: string;
    public template: string;
    public templateTree: NodeList|DocumentFragment;
    public includes: Map<string, Node>;

    constructor(strings: string[], variables: any[]) {
        this.tag = 'htmljs-' + String(Math.random() * 1000).replace('.', '-');
        this.template = this.createTemplate(strings, variables);
        this.templateTree = this.createFragmentFromTemplate(this.template);
        //this.includes = this.getTemplates();

        this.register();
    }

    public register() {
        customElements.define(this.tag, customElementFactory(this.templateTree));
    }

    public compile() {
        const el = document.createElement(this.tag);

        return el.outerHTML;
    }

    private createTemplate(strings: string[], variables: any[]) {
        let template = '';
        let currentVar = 0;
        const len = strings.length;

        for(let i = 0; i < len; i++) {
            if (i % 2 === 0) {
                template += strings[i];
            } else {
                template += variables[currentVar];
                currentVar++;
            }
        }

        return template.trim();
    }

    private createFragmentFromTemplate(template: string) {
        const el = document.createElement('template');

        return el.childNodes;
    }

    private getTemplates() {
        let validTemplates = new Map();
        const templates = this.templateTree.querySelectorAll('template');
        
        for (let template of templates) {
            const id = template.getAttribute('id')
            const isValid = typeof id === "string";

            if (isValid) {
                validTemplates.set(id, template);
            }
        }

        return validTemplates;
    }
}