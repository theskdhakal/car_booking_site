export const auth = (req, res, next) => {
  //let it go to next router
  //or
  //stop here and response to client

  try {
    res.json({
      status: "error",
      message: "!! You do not have permission to this api",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
