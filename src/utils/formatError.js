// "error": {
//         "_original": {
//             "firstName": "Rabah",
//             "lastName": "Babaci",
//             "email": "rbabaci1@gmail.com",
//             "username": "rbabaci1",
//             "passwordx": "212139"
//         },
//         "details": [
//             {
//                 "message": "\"password\" is required",
//                 "path": [
//                     "password"
//                 ],
//                 "type": "any.required",
//                 "context": {
//                     "label": "password",
//                     "key": "password"
//                 }
//             }
//         ]
//     }

const formatError = error => {
  const received = error._original;
  const { message } = error.details[0];

  return { received_body: received, message };
};

module.exports = formatError;
