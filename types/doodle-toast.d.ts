import { CSSResult, TemplateResult } from 'lit-element';
import PopupBase from './popup-base';
export declare class DoodleToast extends PopupBase {
    constructor(message?: string, position?: string, duration?: number);
    static get styles(): CSSResult;
    private getToastClasses;
    protected render(): TemplateResult;
}
