import { tutorialConstants } from "../constants";
import {tutorialService, userService} from "../service";
import {history} from "../helpers";

export const tutorialAction = {
  getAllTutorials,
  addTutorial,
};

function getAllTutorials() {

  return (dispatch) => {
    dispatch(request());
    tutorialService.getAllTutorials().then(
        (tutorials) => dispatch(success(tutorials)),
        (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: tutorialConstants.GETALL_TUTORIALS_REQUEST};
  }
  function success(tutorials) {
    return { type: tutorialConstants.GETALL_TUTORIALS_SUCCESS, tutorials };
  }
  function failure(error) {
    return { type: tutorialConstants.GETALL_TUTORIALS_FAILURE, error };
  }
}
function addTutorial(title, description, video,archive, photo, category){

  return (dispatch) => {
    dispatch(request());
    tutorialService.addTutorial(title,description,video,archive,photo, category).then(
      history.push("/Tutorial"),
        alert("Tutorial Sent")
  );

  };
  function request() {
    return { type: tutorialConstants.ADD_TUTORIAL_REQUEST};
  }

}

export function selectTutorial(tutorial) {
  return {
    type: tutorialConstants.SELECT_TUTORIAL,
    payload: {
      tutorial,
    },
  };
}
