import { LitElement, property } from 'lit-element';

const popupQueue: Array<PopupBase> = [];
let currentPopup: PopupBase | null | undefined = null;

export default class PopupBase extends LitElement {
  @property({ type: String })
  public message = '';

  @property({ type: String })
  public position = 'center';

  @property({ type: Number })
  public duration = 0;

  public resolve:
    | ((value: boolean | string | null | PromiseLike<boolean | string | null>) => void)
    | null
    | undefined = null;

  protected static processPopupQueue(): void {
    if (currentPopup === null && popupQueue.length > 0) {
      currentPopup = popupQueue.shift();
      if (currentPopup) {
        document.body.append(currentPopup);
        if (currentPopup.duration > 0) {
          window.setTimeout(() => {
            currentPopup?.close(false);
          }, currentPopup.duration);
        }
      } else {
        currentPopup = null;
      }
    }
  }

  protected static push(doodlePopup: PopupBase): void {
    popupQueue.push(doodlePopup);
  }

  protected static resetCurrentPopup(): void {
    currentPopup = null;
  }

  protected static getCurrentPopup(): PopupBase | null | undefined {
    return currentPopup;
  }

  public constructor(message = '', position = 'center', duration = 0) {
    super();
    this.message = message;
    this.position = position;
    this.duration = duration;
  }

  public show(): Promise<boolean | string | null> {
    return new Promise<boolean | string | null>((resolve) => {
      this.resolve = resolve;
      PopupBase.push(this);
      PopupBase.processPopupQueue();
    });
  }

  public close(value: boolean | string | null): void {
    const current = PopupBase.getCurrentPopup();
    if (current) {
      current.remove();
      if (current.resolve) {
        current.resolve(value);
      }
      PopupBase.resetCurrentPopup();
      PopupBase.processPopupQueue();
    }
  }
}
