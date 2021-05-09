import { DoodleAlert } from './doodle-alert';
import { DoodleConfirm } from './doodle-confirm';
import { DoodlePrompt } from './doodle-prompt';
import { DoodleToast } from './doodle-toast';
export declare const alert: (message?: string, position?: string) => DoodleAlert;
export declare const confirm: (message?: string, position?: string) => DoodleConfirm;
export declare const prompt: (message?: string, position?: string) => DoodlePrompt;
export declare const toast: (message?: string, position?: string, duration?: number) => DoodleToast;
