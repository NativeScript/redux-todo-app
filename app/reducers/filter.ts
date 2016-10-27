import { CHANGE_FILTER, FILTERS } from './constants';

const initialState = FILTERS[0];

export function filter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;

    default:
      return state;
  }
}
