//import Config from "./config";
import TemplateLiteral from "./template/templateLiteral";

export const html = (strings: string[], ...args: any[]) => {
    const el = new TemplateLiteral(strings, args);

    return {
        output: el.compile(),
        template: el.template,
        errors: []
    }
}

export const render = (template: string[], args: any[]) => {
    const el = new TemplateLiteral(template, args);

    return {
        output: el.compile(),
        errors: []
    }
}

export const compile = (strings: string[], ...args: any[]) => {
    const el = new TemplateLiteral(strings, args);

    return {
        template: el.template,
        errors: []
    }
}

export const config = (config: any) => {
    return config;
}