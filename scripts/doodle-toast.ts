import { CSSResult, customElement, html, TemplateResult } from 'lit-element';
import PopupBase from './popup-base';
import { toastStyles } from './styles';
@customElement('doodle-toast')
export class DoodleToast extends PopupBase {
  public constructor(message = '', position = 'bottom', duration = 3000) {
    super(message, position, duration);
  }

  public static get styles(): CSSResult {
    return toastStyles;
  }

  private getToastClasses(): string {
    const classes: Array<string> = [];
    classes.push(`popup`);
    classes.push(`popup-${this.position}`);
    return classes.join(' ');
  }

  protected render(): TemplateResult {
    return html`
      <div class="${this.getToastClasses()}">
        <div>${this.message}</div>
      </div>
    `;
  }
}
