import { MissingElementError } from "./CustomError.js";
import ElementFinder from "./ElementFinder.js";

export default class StateManager {
  public static updateSocketStateText(status: SocketState) {
    const stateText = document.getElementById("connection-state");
    if (stateText) stateText.textContent = status;
  }

  public static getUsername() {
    return document.querySelector<HTMLInputElement>(".display-name input")
      ?.value;
  }

  public static updateConnectedUI() {
    this.toggleBodyConnectedClass(true);
    this.toggleConnectionControls(true);
    this.updateSocketStateText("Connected");
    this.setDisplayNameInputEnabled(false);
    this.setChatControlsEnabled(true);
  }

  public static updateDisconnectedUI() {
    this.toggleBodyConnectedClass(false);
    this.toggleConnectionControls(false);
    this.updateSocketStateText("Disconnected");
    this.setDisplayNameInputEnabled(true);
    this.setChatControlsEnabled(false);
  }

  public static handleInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const inputChangeValue = input.value;

    this.setConnectButtonEnabled(inputChangeValue ? true : false);
  }

  public static setChatControlsEnabled(enable: boolean) {
    const chatSubmit = ElementFinder.getChatSubmitButton();
    const chatTextarea = ElementFinder.getChatTextareaInput();

    if (enable) {
      chatSubmit.disabled = false;
      chatTextarea.disabled = false;
    } else {
      chatSubmit.disabled = true;
      chatTextarea.disabled = true;
    }
  }

  public static setConnectButtonEnabled(enable: boolean) {
    const connectButton = ElementFinder.getConnectButton();
    if (enable) {
      connectButton.disabled = false;
    } else {
      connectButton.disabled = true;
    }
  }

  public static setDisplayNameInputEnabled(enable: boolean) {
    const input = ElementFinder.getDisplayNameInput();

    if (enable) {
      input.disabled = false;
    } else {
      input.disabled = true;
    }
  }

  public static toggleConnectionControls(isConnected: boolean) {
    const connectButton = ElementFinder.getConnectButton();
    const disconnectButton = ElementFinder.getDisconnectButton();

    connectButton.disabled = isConnected;
    disconnectButton.disabled = !isConnected;
  }

  public static toggleBodyConnectedClass(isConnected: boolean) {
    const body = document.querySelector("body");
    if (isConnected) {
      body?.classList.remove("disconnected");
      body?.classList.add("connected");
    } else {
      body?.classList.remove("connected");
      body?.classList.add("disconnected");
    }
  }

  public static toggleModalDisplay() {
    const displayNameModal = document.getElementById("display-name-modal");

    if (!displayNameModal) throw new MissingElementError("Missing modal");

    displayNameModal.classList.toggle("hidden");
  }
}
