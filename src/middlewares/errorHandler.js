export default class CustomError extends Error {
    constructor(errorMessage, statusCode){
        super(errorMessage);
        this.statusCode = statusCode;
    }
}

export const appLevelErrorHandlerMiddleware = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Server error";
    res.status(err.statusCode).json({ success: false, error: err.message });
    next();
}