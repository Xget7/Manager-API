const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

class AppError extends Error {
  public name: string;
  public description: string;
  public statusCode: number;
  public isOperational: boolean;
  public errorStack: boolean;
  public logError: any;

  constructor(
    name: string,
    statusCode: number,
    description: string,
    isOperational: boolean,
    errorStack: boolean,
    logingErrorResponse: any
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.description = description;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errorStack = errorStack;
    this.logError = logingErrorResponse;
    Error.captureStackTrace(this, AppError);
  }
}


// API Specific Errors
class APIError extends AppError {
  constructor(
    name: string,
    statusCode = STATUS_CODES.INTERNAL_ERROR,
    description = "Internal Server Error",
    isOperational = true
  ) {
    super(name, statusCode, description, isOperational, false, undefined);
  }
}

// 400
class BadRequestError extends AppError {
  constructor(description = "Bad request", logError?: any) {
    super(
      "Bad Request",
      STATUS_CODES.BAD_REQUEST,
      description,
      true,
      false,
      logError
    );
  }
}

// 400
class ValidationError extends AppError {
  constructor(description = "Validation Error", errorStack = false) {
    super(
      "Validation Error",
      STATUS_CODES.BAD_REQUEST,
      description,
      true,
      errorStack,
      undefined
    );
  }
}

export {
  AppError,
  APIError,
  BadRequestError,
  ValidationError,
  STATUS_CODES,
};
