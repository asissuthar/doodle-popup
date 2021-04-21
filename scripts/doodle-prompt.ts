import { CSSResult, customElement, html, property, TemplateResult } from 'lit-element';
import PopupBase from './popup-base';
import { promptStyle } from './styles';

@customElement('doodle-prompt')
class DoodlePrompt extends PopupBase {
  @property({ type: String })
  public value = '';

  public constructor(message = '', position = 'center') {
    super(message, position);
  }

  public static get styles(): CSSResult {
    return promptStyle;
  }

  private getPromptClasses(): string {
    const classes: Array<string> = [];
    classes.push(`popup`);
    classes.push(`popup-${this.position}`);
    return classes.join(' ');
  }

  protected render(): TemplateResult {
    return html`
      <div class="${this.getPromptClasses()}">
        <div>${this.message}</div>
        <input class="popup-input-text" type="text" @input="${this.onInputValue}" />
        <div class="popup-buttons">
          <button class="popup-button popup-button-ok" @click="${this.onClickOk}">OK</button>
          <button class="popup-button popup-button-cancel" @click="${this.onClickCancel}">Cancel</button>
        </div>
      </div>
    `;
  }

  private onClickOk(): void {
    this.close(this.value);
  }

  private onClickCancel(): void {
    this.close(null);
  }

  private onInputValue(event: InputEvent): void {
    const inputElement = <HTMLInputElement>event.target;
    this.value = inputElement.value;
  }
}

export default (message = '', position = 'center'): DoodlePrompt => {
  return new DoodlePrompt(message, position);
};
