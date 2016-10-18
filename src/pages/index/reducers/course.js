import {
  FETCH_COURSE_REPUEST,
  FETCH_COURSE_FAILURE,
  FETCH_COURSE_SUCCESS,

  FETCH_CHAPTER_REPUEST,
  FETCH_CHAPTER_FAILURE,
  FETCH_CHAPTER_SUCCESS,
} from '../constants/action-types';

const defaultState = {
  isFetching: false,
  didInvalidate: true,
  lastUpdated: null,
  items: [],
};

const initialState = {
  detail: { ...defaultState },
  chapter: { ...defaultState },
};

function course(state = initialState, action) {
  switch (action.type) {
    // course
    case FETCH_COURSE_REPUEST:
      // better
      return { ...state, detail: { isFetching: true } };
    case FETCH_COURSE_FAILURE:
      return { ...state, detail: { isFetching: false } };
    case FETCH_COURSE_SUCCESS:
      return { ...state, detail: { isFetching: false, items: action.items } };

    // chapter
    case FETCH_CHAPTER_REPUEST:
      // better
      return { ...state, chapter: { isFetching: true } };
    case FETCH_CHAPTER_FAILURE:
      return { ...state, chapter: { isFetching: false } };
    case FETCH_CHAPTER_SUCCESS:
      return { ...state, chapter: { isFetching: false, items: action.items } };
    default:
      return state;
  }
}

export default course;
