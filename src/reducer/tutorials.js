import { tutorialConstants } from "../constants/tutorialConstants";

const initialState = {
  tutorial: undefined,
};

let payload;

export function tutorials(state = initialState, action) {
  switch (action.type) {
    case tutorialConstants.GETALL_TUTORIALS_REQUEST:
      return {
        loading: true,
      };
    case tutorialConstants.GETALL_TUTORIALS_SUCCESS:
      return {
        items: action.tutorials,
      };
    case tutorialConstants.GETALL_TUTORIALS_FAILURE:
      return {
        error: action.error,
      };
    case tutorialConstants.SELECT_TUTORIAL:
      return {
        tutorial: action.payload.tutorial,
      };
    default:
      return state;
  }
}
