// import the user db models

async function getUsers() {
  try {
    // query database
    return new Promise((res, rej) =>
      res([
        { id: 1, name: "Rabah Babaci", age: 26 },
        { id: 2, name: "Kyla Gifford", age: 23 },
      ])
    );
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getUsers };
