import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { initialState } from "./initState";
import { reducer } from "./reducer";
import {
  loseRound,
  setCards,
  selectFirstCard,
  selectSecondCard,
  resetState
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

  return (
    <div className="container">
      {
        state.cards.every(x => x.hidden === false)
        ? <h1>YOU WIN!</h1>
        : <h1>Try it!</h1>
      }

      <div className="App">
        {
          state.cards.map((elem, i) => {
            return (
              <div
                key={elem.id}
                className="card"
                onClick={
                  (event) => {
                    if (!elem.hidden) {
                      return;
                    } else if (
                      (state.onCheck === 0 && elem.hidden === true)
                      || state.color1 === state.color2
                    ) {
                      chooseFirstCard(i, elem);
                    } else if (state.onCheck === 1) {
                      chooseSecondCard(i, elem);
                    } else if (
                      state.onCheck === 2 &&
                      state.color1 !== state.color2
                    ) {
                      wrongRound();
                    }
                  }
                }
                style={{ backgroundColor: elem.hidden ? "black" : elem.color }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
