import {
  ADD_SCORE,
  CHANGE_SCORE,
  DELETE_SCORE,
  UPDATE_SCORE,
  DELETE_PLAYER,
  ADD_PLAYER,
} from "../actionTypes";

let PlayerOneId = 0;

export function addPlayer(name) {
  return {
    type: ADD_PLAYER,
    payload: name,
  };
}
