export const sendFile = file => {
  return new Promise((resolve, reject) => {
    fetch("https://fhirtest.uhn.ca/baseDstu3/Binary", {
      method: "POST",
      body: file
    })
      .then(function(response) {
        return response;
      })
      .then(function(data) {
        resolve(data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};
