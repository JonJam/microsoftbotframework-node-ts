export default class StatusError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message);
  }
}
