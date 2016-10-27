import * as types from '../reducers/constants';

export function changeFilter(filter) {
  return { type: types.CHANGE_FILTER, filter };
}
