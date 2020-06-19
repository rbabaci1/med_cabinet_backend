// import the user db models

module.exports = async function getUsers() {
  try {
    // query database
    return [
      { id: 1, name: "Rabah Babaci", age: 26 },
      { id: 2, name: "Kyla Gifford", age: 23 },
    ];
  } catch (error) {
    throw Error("Error while retrieving users.");
  }
};
