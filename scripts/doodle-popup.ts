import doodleToast from './doodle-toast';
import doodleAlert from './doodle-alert';
import doodleConfirm from './doodle-confirm';
import doodlePrompt from './doodle-prompt';

export const toast = doodleToast;
export const alert = doodleAlert;
export const confirm = doodleConfirm;
export const prompt = doodlePrompt;

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
