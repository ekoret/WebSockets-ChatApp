import { MissingElementError } from "./CustomError.js";

export default class ElementFinder {
  /**
   * The connect button
   */
  public static getConnectButton() {
    const connectButton = document.querySelector<HTMLButtonElement>("#connect");

    if (!connectButton) throw new MissingElementError("Missing connect button");

    return connectButton;
  }

  /**
   * The disconnect button
   */
  public static getDisconnectButton() {
    const connectButton =
      document.querySelector<HTMLButtonElement>("#disconnect");

    if (!connectButton)
      throw new MissingElementError("Missing disconnect button");

    return connectButton;
  }

  /**
   * The input field for the display name
   */
  public static getDisplayNameInput() {
    const input = document.querySelector<HTMLInputElement>(
      ".display-name input"
    );

    if (!input) throw new MissingElementError("Missing display name input");

    return input;
  }

  /**
   * The submit button inside the chat controls form
   */
  public static getChatSubmitButton() {
    const button = document.querySelector<HTMLButtonElement>(
      ".chat-controls button"
    );

    if (!button) throw new MissingElementError("Missing submit button");

    return button;
  }

  /**
   * The textarea input inside the chat controls form
   */
  public static getChatTextareaInput() {
    const textarea = document.querySelector<HTMLTextAreaElement>(
      ".chat-controls textarea"
    );

    if (!textarea) throw new MissingElementError("Missing textarea input");

    return textarea;
  }

  /**
   * The main chat window where messages are displayed
   */
  public static getChatWindow() {
    const chatWindow = document.querySelector<HTMLElement>(".chat-window");

    if (!chatWindow) throw new MissingElementError("Missing chat window");

    return chatWindow;
  }

  public static getClearChatButton() {
    const button = document.querySelector<HTMLButtonElement>("#clear-chat");

    if (!button) throw new MissingElementError("Missing clear chat button");

    return button;
  }

  public static getChatControlsForm() {
    const form = document.querySelector<HTMLFormElement>("form.chat-controls");

    if (!form) throw new MissingElementError("Missing chat controls form");

    return form;
  }
}
