export const HtmlJsElementFactory = (template: NodeList|DocumentFragment, args?: {key: any, value: any} ) => {
    return class HtmlJsElement extends HTMLElement {
        private template: NodeList|DocumentFragment;
        private shadowRoots: Map<string, ShadowRoot> = new Map();
        private config: any;

        constructor() {
            super();
            this.template = template;
            this.config = {};

            this.render();
        }

        public render() {
            console.log(this.template);
            if (!this.config.shadowRoot) {
                this.attachShadowRoot('default', this.template);
            } else {
                //this.appendChild(this.template);
            }
        }

        private attachShadowRoot(name: string, template: any) {
            const shadowRoot = this.attachShadow({mode: 'open'});
            const id = name ? name : String(this.shadowRoots.size);
                
            shadowRoot.appendChild(template);
            this.shadowRoots.set(id, shadowRoot);

            return shadowRoot;
        }
    }
}

export default HtmlJsElementFactory;