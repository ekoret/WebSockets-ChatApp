export class MissingElementError extends Error {
  constructor(message: string = "No element found") {
    super(message);

    this.name = "MissingElementError";
  }
}

export class NoDisplayNameSetError extends Error {
  constructor(message: string = "No display name set") {
    super(message);

    this.name = "NoDisplayNameSetError";
  }
}
