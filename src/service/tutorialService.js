import { authHeader } from "../helpers";

export const tutorialService = {
  getAllTutorials,
  addTutorial,
};

function getAllTutorials() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${"http://localhost:8080/tutorial"}`, requestOptions).then(
    handleResponse
  );
}

function addTutorial(title, description, video,archive, photo,category) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(`${"http://localhost:8080/tutorial/saveTutorial/tutorialTitle/"+title+"/description/"+description+"/tutorialImage/"+photo+"/video/"+video+"/photos/"+archive+"/category/"+category}`, requestOptions);
}

function handleResponse(response) {
  console.log(response);
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
