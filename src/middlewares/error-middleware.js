export const errorHandler = (err, req, res, next) => {
  req.logger?.error(err.message);

  res.status(err.status || 500).json({
    status: "error",
    message: err.message
  });
};
