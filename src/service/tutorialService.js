import { authHeader } from "../helpers";

export const tutorialService = {
  getAllTutorials,
};

function getAllTutorials() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${"http://localhost:8080/tutorial"}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
