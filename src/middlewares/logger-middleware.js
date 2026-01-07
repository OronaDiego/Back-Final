import logger from "../services/logger.js";

export const loggerMiddleware = (req, res, next) => {
  req.logger = logger;
  req.logger.http(`${req.method} ${req.url}`);
  next();
};
