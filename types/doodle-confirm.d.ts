import { CSSResult, TemplateResult } from 'lit-element';
import PopupBase from './popup-base';
export declare class DoodleConfirm extends PopupBase {
    constructor(message?: string, position?: string);
    static get styles(): CSSResult;
    private getAlertClasses;
    protected render(): TemplateResult;
    private onClickOk;
    private onClickCancel;
}
