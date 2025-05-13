// src/shared/errors/BusinessError.ts
export class BusinessError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "BusinessError";
    }
  }