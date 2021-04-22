import { CSSResultGroup, TemplateResult } from 'lit';
import PopupBase from '../scripts/popup-base';
export declare class DoodleAlert extends PopupBase {
  constructor(message?: string, position?: string);
  static get styles(): CSSResultGroup;
  private getAlertClasses;
  protected render(): TemplateResult;
  protected onClickOk(): void;
}
