import * as Actions from '../Actions/ActionTypes';

const AgilityReducer = (state = {count: 0}, action: any) => {
  switch (action.type) {
    case Actions.AGILITY_INCREMENT:
      return {
        count: state.count + 1,
      };
    case Actions.AGILITY_DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default AgilityReducer;
