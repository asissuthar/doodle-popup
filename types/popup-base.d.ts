import { LitElement } from 'lit';
export default class PopupBase extends LitElement {
    message: string;
    position: string;
    duration: number;
    resolve: ((value: boolean | string | null | PromiseLike<boolean | string | null>) => void) | null | undefined;
    protected static processPopupQueue(): void;
    protected static push(doodlePopup: PopupBase): void;
    protected static resetCurrentPopup(): void;
    protected static getCurrentPopup(): PopupBase | null | undefined;
    constructor(message?: string, position?: string, duration?: number);
    protected onOverlayMouseDown(event: MouseEvent): void;
    show(): Promise<boolean | string | null>;
    close(value: boolean | string | null): void;
}
