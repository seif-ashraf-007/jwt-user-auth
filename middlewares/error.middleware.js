const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.log(err);

    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new ErrorResponse(message, 404);
    }

    if (err.code === 11000) {
      const message = `Duplicate field value entered`;
      error = new ErrorResponse(message, 400);
    }

    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new ErrorResponse(message, 400);
    }

    if (err.name === "JsonWebTokenError") {
      const message = "Invalid token. Please log in again.";
      error = new ErrorResponse(message, 401);
    }

    if (err.name === "TokenExpiredError") {
      const message = "Token expired. Please log in again.";
      error = new ErrorResponse(message, 401);
    }

    if (err.name === "UnauthorizedError") {
      const message = "Unauthorized access.";
      error = new ErrorResponse(message, 401);
    }

    if (err.name === "SyntaxError") {
      const message = "Syntax error.";
      error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Server Error",
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
