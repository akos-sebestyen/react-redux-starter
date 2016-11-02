import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {ajax} from 'rxjs/observable/dom/ajax';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

export const fetchUser = () => {
  return {type:FETCH_USER, payload:'akos-sebestyen'};
};

const fetchUserFulfilled = (payload) => ({ type: FETCH_USER_FULFILLED, payload });

export const userEpic = action$ => {
  return action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(fetchUserFulfilled)
    );
};

const defaultState = {
  name: '',
  isLoading: false
};

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case FETCH_USER:
      return { ...state, isLoading: true };
    case FETCH_USER_FULFILLED:

      return {
        ...state,
        isLoading: false,
        name: action.payload.name
      };
    default:
      return state;
  }
};

export default reducer;