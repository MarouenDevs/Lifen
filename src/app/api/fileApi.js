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

export const seekSummary = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://hapi.fhir.org/baseDstu3/Binary/_history?_pretty=true&_summary=true",
      {
        method: "GET"
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        resolve(data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};
