import { CSSResult, customElement, html, TemplateResult } from 'lit-element';
import PopupBase from './popup-base';
import { confirmStyles } from './styles';

@customElement('doodle-confirm')
class DoodleConfirm extends PopupBase {
  public constructor(message = '', position = 'center') {
    super(message, position);
  }

  public static get styles(): CSSResult {
    return confirmStyles;
  }

  private getAlertClasses(): string {
    const classes: Array<string> = [];
    classes.push(`popup`);
    classes.push(`popup-${this.position}`);
    return classes.join(' ');
  }

  protected render(): TemplateResult {
    return html`
      <div class="${this.getAlertClasses()}">
        <div>${this.message}</div>
        <div class="popup-buttons">
          <button class="popup-button popup-button-ok" @click="${this.onClickOk}">OK</button>
          <button class="popup-button popup-button-cancel" @click="${this.onClickCancel}">Cancel</button>
        </div>
      </div>
    `;
  }

  private onClickOk(): void {
    this.close(true);
  }

  private onClickCancel(): void {
    this.close(false);
  }
}

export default (message = '', position = 'center'): DoodleConfirm => {
  return new DoodleConfirm(message, position);
};