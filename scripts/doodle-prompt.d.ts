import { CSSResultGroup, TemplateResult } from 'lit';
import PopupBase from './popup-base';
export declare class DoodlePrompt extends PopupBase {
    _inputText: HTMLInputElement;
    value: string;
    constructor(message?: string, position?: string);
    static get styles(): CSSResultGroup;
    private getPromptClasses;
    protected render(): TemplateResult;
    firstUpdated(): void;
    private onClickOk;
    private onClickCancel;
    private onInputValue;
}
