import { createAction, createActions } from 'redux-actions';

import {
  FETCH_EXAMS_REQUEST,
  FETCH_EXAMS_FAILURE,
  FETCH_EXAMS_SUCCESS,
} from '../constants/action-types';

import api from 'utils/api';

const fetchExamsRequest = createAction(FETCH_EXAMS_REQUEST);

export const {
  fetchExamsFailure,
  fetchExamsSuccess,
} = createActions(FETCH_EXAMS_FAILURE, FETCH_EXAMS_SUCCESS);


export function fetchExams(params) {
  const url = `/plan/${params.planId}/solution/${params.solutionId}/quiz/${params.quizID}`;
  return (dispatch) => {
    dispatch(fetchExamsRequest());
    return api({
      method: 'GET',
      url,
    }).then((res) => {
      dispatch(fetchExamsSuccess(res.data.items));
    }).catch((err) => {
      dispatch(fetchExamsFailure(err));
    });
  };
}
