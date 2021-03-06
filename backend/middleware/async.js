module.exports = function (handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    }
    catch(error) {
      console.log(error);
      res.status(500).json({
        message: error.message
      });
    }
  };
}
