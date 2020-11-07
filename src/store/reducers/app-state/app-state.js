import {extend} from "../../../utils/common";
import {ActionType} from "../../action";

const initialState = {
  sectionsCount: 1,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_SECTION:
      return extend(state, {
        sectionsCount: state.sectionsCount + 1
      });
  }

  return state;
};

export {appState};
