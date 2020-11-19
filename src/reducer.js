import { data } from "./data";
import {
  SET_CARDS,
  SELECT_FIRST_CARD,
  SELECT_SECOND_CARD,
  LOSE_ROUND,
  RESET_STATE
} from "./types";

export function reducer(state, action) {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: [...data].sort(() => Math.random() - 0.5),
      };

    case SELECT_FIRST_CARD:
      state.cards[action.payload.index].hidden = false;
      return {
        ...state,
        card1: action.payload.index,
        color1: action.payload.color,
        onCheck: 1,
      };

    case SELECT_SECOND_CARD:
      state.cards[action.payload.index].hidden = false;
      return {
        ...state,
        card2: action.payload.index,
        color2: action.payload.color,
        onCheck: 2,
      };

    case LOSE_ROUND:
      state.cards[state.card1].hidden = true;
      state.cards[state.card2].hidden = true;
      return {
        ...state
      };
    
    case RESET_STATE:
      return {
        ...state,
        onCheck: 0,
        color1: "color1",
        color2: "color2",
        card1: null,
        card2: null
      };

      default:
        throw new Error();
  }
}
