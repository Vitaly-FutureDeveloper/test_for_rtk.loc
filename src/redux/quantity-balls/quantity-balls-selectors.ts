import {createSelector} from 'reselect';
import {AppStateType} from "../store";

const getQuantityBallsSelector = (state: AppStateType) => state.quantityBalls.quantityBalls;
export const getQuantityBalls = createSelector(getQuantityBallsSelector, (quantity) => quantity);

