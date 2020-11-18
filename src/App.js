import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { initialState } from "./initState";
import { reducer } from "./reducer";
import {
  loseRound,
  setCards,
  selectFirstCard,
  selectSecondCard,
  resetState,
  winRound
} from "./action";

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(setCards());
  }, []);

  function chooseFirstCard(i, elem) {
    dispatch({
      ...selectFirstCard(),
      payload: { index: i, color: elem.color }
    });
  }

  function chooseSecondCard(i, elem) {
    dispatch({
      ...selectSecondCard(),
      payload: { index: i, color: elem.color }
    });
  }

  function wrongRound() {
    dispatch(loseRound());
    dispatch(resetState());
  }

  function rightRound() {
    dispatch(winRound());
  }

  return (
    <div className="container">
      <h1>Try it!</h1>
      <div className="App">
        {state.cards.map((elem, i) => {
          return (
            <div
              key={Math.random().toString()}
              className="card"
              onClick={() => {
                if (!elem.hidden) {
                  return;
                } else if (state.onCheck === 0 && elem.hidden === true) {
                  chooseFirstCard(i, elem);
                } else if (state.onCheck === 1) {
                  chooseSecondCard(i, elem);
                } else if (
                  state.onCheck === 2 &&
                  state.color1 !== state.color2
                ) {
                  wrongRound();
                } else {
                  rightRound();
                }
              }}
              style={{ backgroundColor: elem.hidden ? "black" : elem.color }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
