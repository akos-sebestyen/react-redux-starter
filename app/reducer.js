import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';

export const INCREMENT = 'INCREMENT';
export const INCREMENT2 = 'INCREMENT2';

export const increment = () => {
  return {type:INCREMENT};
};

export const incrementEpic = action$ => {
  return action$.ofType(INCREMENT).do(console.log).mapTo({type:INCREMENT2});
};

const defaultState = {
  count: 0
};

export const reducer = (state = defaultState, action) => {
  switch(action.type){
    case INCREMENT:
      return Object.assign({}, state, {count: state.count + 1});
    default:
      return state;
  }
};