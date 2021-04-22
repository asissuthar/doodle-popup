import { CSSResultGroup, TemplateResult } from 'lit';
import PopupBase from './popup-base';
export declare class DoodleConfirm extends PopupBase {
    constructor(message?: string, position?: string);
    static get styles(): CSSResultGroup;
    private getAlertClasses;
    protected render(): TemplateResult;
    private onClickOk;
    private onClickCancel;
}
