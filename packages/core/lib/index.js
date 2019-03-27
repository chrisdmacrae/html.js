'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const HtmlJsElementFactory = (template, args) => {
    return class HtmlJsElement extends HTMLElement {
        constructor() {
            super();
            this.shadowRoots = new Map();
            this.template = template;
            this.config = {};
            this.render();
        }
        render() {
            console.log(this.template);
            if (!this.config.shadowRoot) {
                this.attachShadowRoot('default', this.template);
            }
        }
        attachShadowRoot(name, template) {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const id = name ? name : String(this.shadowRoots.size);
            shadowRoot.appendChild(template);
            this.shadowRoots.set(id, shadowRoot);
            return shadowRoot;
        }
    };
};
//# sourceMappingURL=customElement.js.map

class TemplateLiteral {
    constructor(strings, variables) {
        this.tag = 'htmljs-' + String(Math.random() * 1000).replace('.', '-');
        this.template = this.createTemplate(strings, variables);
        this.templateTree = this.createFragmentFromTemplate(this.template);
        //this.includes = this.getTemplates();
        this.register();
    }
    register() {
        customElements.define(this.tag, HtmlJsElementFactory(this.templateTree));
    }
    compile() {
        const el = document.createElement(this.tag);
        return el.outerHTML;
    }
    createTemplate(strings, variables) {
        let template = '';
        let currentVar = 0;
        const len = strings.length;
        for (let i = 0; i < len; i++) {
            if (i % 2 === 0) {
                template += strings[i];
            }
            else {
                template += variables[currentVar];
                currentVar++;
            }
        }
        return template.trim();
    }
    createFragmentFromTemplate(template) {
        const el = document.createElement('template');
        return el.childNodes;
    }
    getTemplates() {
        let validTemplates = new Map();
        const templates = this.templateTree.querySelectorAll('template');
        for (let template of templates) {
            const id = template.getAttribute('id');
            const isValid = typeof id === "string";
            if (isValid) {
                validTemplates.set(id, template);
            }
        }
        return validTemplates;
    }
}
//# sourceMappingURL=templateLiteral.js.map

//import Config from "./config";
const html = (strings, ...args) => {
    const el = new TemplateLiteral(strings, args);
    return {
        output: el.compile(),
        template: el.template,
        errors: []
    };
};
const render = (template, args) => {
    const el = new TemplateLiteral(template, args);
    return {
        output: el.compile(),
        errors: []
    };
};
const compile = (strings, ...args) => {
    const el = new TemplateLiteral(strings, args);
    return {
        template: el.template,
        errors: []
    };
};
const config = (config) => {
    return config;
};
//# sourceMappingURL=index.js.map

exports.compile = compile;
exports.config = config;
exports.html = html;
exports.render = render;
