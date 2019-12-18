const methods = (methods = ["GET", "POST", "DELETE"]) => (req, res, next) => {
  if (methods.includes(req.method)) return next();
  const error = {
    status: 501,
    error: "Method not implemented"
  };

  next(error);
};

module.exports = methods;
