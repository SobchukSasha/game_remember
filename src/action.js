import {
  RESET_STATE,
  SELECT_FIRST_CARD,
  SET_CARDS,
  SELECT_SECOND_CARD,
  LOSE_ROUND
} from "./types";

export function setCards() {
  return {
    type: SET_CARDS
  };
}

export function selectFirstCard() {
  return {
    type: SELECT_FIRST_CARD
  };
}

export function selectSecondCard() {
  return {
    type: SELECT_SECOND_CARD
  };
}

export function loseRound() {
  return {
    type: LOSE_ROUND
  };
}

export function resetState() {
  return {
    type: RESET_STATE
  };
}
