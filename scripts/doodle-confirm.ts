import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import PopupBase from './popup-base';
import { confirmStyles } from './styles';

@customElement('doodle-confirm')
export class DoodleConfirm extends PopupBase {
  public constructor(message = '', position = 'center') {
    super(message, position);
  }

  public static get styles(): CSSResultGroup {
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
      <div class="popup-overlay" @mousedown="${this.onOverlayMouseDown}">
        <div class="${this.getAlertClasses()}">
          <div>${this.message}</div>
          <div class="popup-buttons">
            <button class="popup-button popup-button-ok" @click="${this.onClickOk}">OK</button>
            <button class="popup-button popup-button-cancel" @click="${this.onClickCancel}">Cancel</button>
          </div>
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
