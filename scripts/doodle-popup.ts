import doodleToast from './doodle-toast';
import doodleAlert from './doodle-alert';
import doodleConfirm from './doodle-confirm';
import doodlePrompt from './doodle-prompt';

const DoodlePopup = {
  toast: doodleToast,
  alert: doodleAlert,
  confirm: doodleConfirm,
  prompt: doodlePrompt,
};

window['DoodlePopup'] = DoodlePopup;
