import { css } from 'lit';

const popupBaseStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  .popup-overlay {
    font-family: sans-serif;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    oveflow: hidden;
    background: rgba(0, 0, 0, 0.4);
    pointer-events: auto;
  }

  .popup {
    max-width: 80%;
    width: 300px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: #fff;
    text-align: center;
    z-index: 9999;
    user-select: none;
    pointer-events: auto;
    padding: 20px;
  }

  .popup-top {
    margin-top: 40px;
    align-self: flex-start;
  }

  .popup-center {
    align-self: center;
  }

  .popup-bottom {
    margin-bottom: 40px;
    align-self: flex-end;
  }

  .popup-input-text {
    width: 100%;
    border: none;
    outline: none;
    text-align: center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 2px solid #ffffff;
  }

  .popup-input-text:focus {
    border-color: #3b82f6;
  }

  .popup-buttons {
    display: flex;
  }

  .popup-button {
    margin-top: 10px;
    padding: 10px 20px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }

  .popup-button-ok {
    background-color: #3b82f6;
    color: #ffffff;
  }

  .popup-button-cancel {
    background: none;
    border: 2px solid #3b82f6;
    color: #ffffff;
    margin-left: 10px;
  }
`;

export const toastStyles = css`
  ${popupBaseStyles}

  .popup-overlay {
    background: rgba(0, 0, 0, 0);
    pointer-events: none;
  }

  .popup {
    padding: 10px 20px;
    width: auto;
  }
`;

export const alertStyles = css`
  ${popupBaseStyles}
`;

export const confirmStyles = css`
  ${popupBaseStyles}
`;

export const promptStyle = css`
  ${popupBaseStyles}
`;
