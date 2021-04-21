import { CSSResult, TemplateResult } from 'lit-element';
import PopupBase from './popup-base';
export declare class DoodlePrompt extends PopupBase {
    value: string;
    constructor(message?: string, position?: string);
    static get styles(): CSSResult;
    private getPromptClasses;
    protected render(): TemplateResult;
    private onClickOk;
    private onClickCancel;
    private onInputValue;
}
