const getEntityName = tableName => {
  switch (tableName) {
    case "users":
      return "user";
    case "products":
      return "product";
    case "flavors":
      return "flavor";
    case "effects":
      return "effect";
    default:
      return "dispensary";
  }
};

module.exports = getEntityName;
