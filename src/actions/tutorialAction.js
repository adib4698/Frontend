import { tutorialConstants } from "../constants";
import { tutorialService } from "../service";

export const tutorialAction = {
  getAllTutorials,
  selectTutorial,
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

export function selectTutorial(tutorial) {
  return {
    type: tutorialConstants.SELECT_TUTORIAL,
    payload: {
      tutorial,
    },
  };
}
