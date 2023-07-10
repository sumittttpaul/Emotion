export function CatchError(error: IError) {
  return {
    name: error.name,
    message: error.message,
  };
}

export class IError extends Error {
  constructor(error: IError) {
    super(error.message);
    this.name = error.name;
  }
}
