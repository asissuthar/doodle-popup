import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import PopupBase from './popup-base';
import { promptStyle } from './styles';

@customElement('doodle-prompt')
export class DoodlePrompt extends PopupBase {
  @query('.popup-input-text')
  public _inputText!: HTMLInputElement;

  @property({ type: String })
  public value = '';

  public constructor(message = '', position = 'center') {
    super(message, position);
  }

  public static get styles(): CSSResultGroup {
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
      <div class="popup-overlay" @mousedown="${this.onOverlayMouseDown}">
        <div class="${this.getPromptClasses()}">
          <div>${this.message}</div>
          <input class="popup-input-text" type="text" @input="${this.onInputValue}" />
          <div class="popup-buttons">
            <button class="popup-button popup-button-ok" @click="${this.onClickOk}">OK</button>
            <button class="popup-button popup-button-cancel" @click="${this.onClickCancel}">Cancel</button>
          </div>
        </div>
      </div>
    `;
  }

  public firstUpdated(): void {
    super.connectedCallback();
    this._inputText.focus();
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
