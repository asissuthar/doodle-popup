import { CSSResultGroup, TemplateResult } from 'lit';
import PopupBase from './popup-base';
export declare class DoodleToast extends PopupBase {
    constructor(message?: string, position?: string, duration?: number);
    static get styles(): CSSResultGroup;
    private getToastClasses;
    protected render(): TemplateResult;
}
