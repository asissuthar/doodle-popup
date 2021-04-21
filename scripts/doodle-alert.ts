import { CSSResult, customElement, html, TemplateResult } from 'lit-element';
import PopupBase from './popup-base';
import { alertStyles } from './styles';

@customElement('doodle-alert')
export class DoodleAlert extends PopupBase {
  public constructor(message = '', position = 'center') {
    super(message, position);
  }

  public static get styles(): CSSResult {
    return alertStyles;
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
        </div>
      </div>
    `;
  }

  protected onClickOk(): void {
    this.close(true);
  }
}
