# Doodle Popup

Promise based custom popups for replacing default alert, confirm, and prompt dialogs.

### Demo

```javascript
DoodlePopup.toast('This is Doodle Toast!')
  .show()
  .then(() => {
    console.log('Toast closed');
  });

DoodlePopup.alert('This is Doodle Alert!')
  .show()
  .then(() => {
    console.log('Alert closed');
  });

DoodlePopup.confirm('This is Doodle Confirm!')
  .show()
  .then((value) => {
    console.log(`Confirm value ${value}`);
  });

DoodlePopup.prompt('This is Doodle Prompt!')
  .show()
  .then((value) => {
    console.log(`Prompt value ${value}`);
  });
```

### Development

```bash
# Install packages
$ yarn

# Start development server
$ yarn serve

# Production build
$ yarn prod
```
