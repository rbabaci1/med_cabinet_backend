const getUsers = async (req, res, next) => {
  try {
    // query database
    res.status(200).json({ message: "[*** Users ***]" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getUsers };
