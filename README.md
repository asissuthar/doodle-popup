# Doodle Popup

[![npm](https://img.shields.io/npm/v/doodle-popup)](https://www.npmjs.com/package/doodle-popup)
[![gzip size](https://img.shields.io/bundlephobia/minzip/doodle-popup?label=gzip%20size)](https://unpkg.com/doodle-popup)
[![downloads](https://img.shields.io/npm/dm/doodle-popup)](https://www.npmjs.com/package/doodle-popup)
[![license](https://img.shields.io/github/license/asissuthar/doodle-popup)](https://github.com/asissuthar/doodle-popup)

Promise based custom popups as alternative to browser default alert, confirm, and prompt dialogs.

It is developed using [TypeScript](https://www.typescriptlang.org/) and [Lit](https://lit.dev/).

Doodle Popups are native web components. Doodle Popups work anywhere you use HTML, with any framework or none at all.

### [Demo](https://asissuthar.github.io/doodle-popup)

## Installation

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/doodle-popup/dist/doodle-popup.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/doodle-popup"></script>
```

## Examples

```js
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
    // value: boolean
    console.log(`Confirm value ${value}`);
  });

DoodlePopup.prompt('This is Doodle Prompt!')
  .show()
  .then((value) => {
    // value: string
    console.log(`Prompt value ${value}`);
  });
```

## Parameters

```ts
// position: string = 'top' | 'center' | 'bottom'

function alert(
  message?: string, // default ''
  position?: string // default 'center'
): DoodleAlert { ... }

function confirm(
  message?: string, // default ''
  position?: string // default 'center'
): DoodleConfirm { ... }

function prompt(
  message?: string, // default ''
  position?: string // default 'center'
): DoodlePrompt { ... }

function toast(
  message?: string, // default ''
  position?: string // default 'bottom'
  duration?: number // default 3000
): DoodleToast { ... }

function show(): Promise<boolean | string | null> { ... }

function close(value: boolean | string | null): void { ... }
```

## Development

```bash
# Get source
$ git clone https://github.com/asissuthar/doodle-popup.git
$ cd doodle-popup

# Install packages
$ yarn

# Start development server
$ yarn serve

# Production build
$ yarn prod
```

## License

Doodle Popup is licensed under a [MIT License](./LICENSE).
