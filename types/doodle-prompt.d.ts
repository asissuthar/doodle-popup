import { CSSResultGroup, TemplateResult } from 'lit';
import PopupBase from './popup-base';
export declare class DoodlePrompt extends PopupBase {
    value: string;
    constructor(message?: string, position?: string);
    static get styles(): CSSResultGroup;
    private getPromptClasses;
    protected render(): TemplateResult;
    private onClickOk;
    private onClickCancel;
    private onInputValue;
}
