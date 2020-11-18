import { data } from "./data";
import {
  SET_CARDS,
  SELECT_FIRST_CARD,
  SELECT_SECOND_CARD,
  LOSE_ROUND,
  RESET_STATE,
  WIN_ROUND
} from "./types";

export function reducer(state, action) {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: data.sort(() => Math.random() - 0.5)
      };

    case SELECT_FIRST_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          (state.cards[action.payload.index].hidden = false)
        ],
        card1: action.payload.index,
        color1: action.payload.color,
        onCheck: 1
      };
    case SELECT_SECOND_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          (state.cards[action.payload.index].hidden = false)
        ],
        card2: action.payload.index,
        color2: action.payload.color,
        onCheck: 2
      };

    case LOSE_ROUND:
      return {
        ...state,
        cards: [
          ...state.cards,
          (state.cards[state.card1].hidden = true),
          (state.cards[state.card2].hidden = true)
        ]
      };
    case RESET_STATE:
      return {
        ...state,
        onCheck: 0,
        color1: null,
        color2: null,
        card1: null,
        card2: null
      };

    case WIN_ROUND:
      return {
        ...state,
        onCheck: 0
      };

    default:
      throw new Error();
  }
}
