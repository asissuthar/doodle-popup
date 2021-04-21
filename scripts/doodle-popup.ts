import { DoodleAlert } from './doodle-alert';
import { DoodleConfirm } from './doodle-confirm';
import { DoodlePrompt } from './doodle-prompt';
import { DoodleToast } from './doodle-toast';

export const alert = (message = '', position = 'center'): DoodleAlert => {
  return new DoodleAlert(message, position);
};

export const confirm = (message = '', position = 'center'): DoodleConfirm => {
  return new DoodleConfirm(message, position);
};

export const prompt = (message = '', position = 'center'): DoodlePrompt => {
  return new DoodlePrompt(message, position);
};

export const toast = (message = '', position = 'bottom', duration = 3000): DoodleToast => {
  return new DoodleToast(message, position, duration);
};

if (process.env.NODE_ENV === 'development') {
  window.addEventListener('DOMContentLoaded', () => {
    window['DoodlePopup'] = {
      toast,
      alert,
      confirm,
      prompt,
    };
  });
}
