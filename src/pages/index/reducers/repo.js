import {
  FETCH_REPO_REPUEST,
  FETCH_REPO_FAILURE,
  FETCH_REPO_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  didInvalidate: true,
  lastUpdated: null,
  items: [],
};

function repo(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPO_REPUEST:
      // better
      return { ...state, isFetching: true };

    // OK
    // return Object.assign({}, state, {
    //   isFetching: true,
    // });

    // bad
    // state.isFetching = true;
    // return state;
    case FETCH_REPO_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      });
    case FETCH_REPO_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    default:
      return state;
  }
}

export default repo;
