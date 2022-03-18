const { StatusCodes } = require('http-status-codes');

const errorMiddleware = async (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong, please try again.',
  };

  return res
    .status(customError.statusCode)
    .json({ message: customError.message });
};

module.exports = errorMiddleware;
