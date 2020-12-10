import {
  ADD_SCORE,
  UPDATE_SCORE,
  ADD_PLAYER,
  DELETE_SCORE,
  DELETE_PLAYER,
} from "../actionTypes";

const initalState = {
  playerOneName: "",
  playerOneScore: 0,
  currentHole: 1,
  playerOnePlusMinus: 0,
  playerOneId: 0,
};

export default function addPlayer(state = initalState, action) {
  switch (action.type) {
    case ADD_PLAYER: {
      return {
        ...state,
        playerOneName: action.payload,
      };
    }
    default:
      return state;
  }
}
