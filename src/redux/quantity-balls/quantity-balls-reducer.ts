import {BaseThunkType, InferActionsTypes} from "../store";


const initialState = {
  quantityBalls: 30 as number,
};


export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

type ThunkType = BaseThunkType<ActionsTypes>;

const quantityBallsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

  switch (action.type) {

    case "SN/balls/SET_BALLS_QUANTITY": {
      return {
        ...state,
        quantityBalls: action.quantityBalls
      };
    }


    default:
      return state;
  }
};

export const actions = {
  setBallsQuantity: (quantityBalls: number) => ({
    type: "SN/balls/SET_BALLS_QUANTITY",
    quantityBalls
  }) as const,
};

export const setBallsQuantityTC = (quantityBalls: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setBallsQuantity(quantityBalls));
  }
};

export default quantityBallsReducer;