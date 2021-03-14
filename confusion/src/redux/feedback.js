import * as ActionTypes from './ActionTypes';

export const Feedback = (state = { errMess: null, feedback:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      return {...state, errMess: null, feedback: action.payload};

    case ActionTypes.FEEDBACK_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_FEEDBACK:
        var feedback = action.payload;
        return { ...state, feedback: state.feedback.concat(feedback)};

    default:
      return state;
  }
};