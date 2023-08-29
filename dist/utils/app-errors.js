"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS_CODES = exports.ValidationError = exports.BadRequestError = exports.APIError = exports.AppError = void 0;
const STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
};
exports.STATUS_CODES = STATUS_CODES;
class AppError extends Error {
    name;
    description;
    statusCode;
    isOperational;
    errorStack;
    logError;
    constructor(name, statusCode, description, isOperational, errorStack, logingErrorResponse) {
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
exports.AppError = AppError;
// API Specific Errors
class APIError extends AppError {
    constructor(name, statusCode = STATUS_CODES.INTERNAL_ERROR, description = "Internal Server Error", isOperational = true) {
        super(name, statusCode, description, isOperational, false, undefined);
    }
}
exports.APIError = APIError;
// 400
class BadRequestError extends AppError {
    constructor(description = "Bad request", logError) {
        super("Bad Request", STATUS_CODES.BAD_REQUEST, description, true, false, logError);
    }
}
exports.BadRequestError = BadRequestError;
// 400
class ValidationError extends AppError {
    constructor(description = "Validation Error", errorStack = false) {
        super("Validation Error", STATUS_CODES.BAD_REQUEST, description, true, errorStack, undefined);
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=app-errors.js.map