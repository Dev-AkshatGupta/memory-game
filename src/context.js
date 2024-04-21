import { createContext, useReducer } from "react";
import { getMemoryGrid, getEmptyGrid } from "./components/util";

const config = {
  rows: 3,
  cols: 3,
  life: 5,
};


const initialState = {
  level: 0,
  isLevelReadyForClick: false,
  rows: config.rows,
  cols: config.cols - 1,
  memoryGrid: [],
  userGrid: [],
  life: config.life,
  activeCount: 0,
  isLevelComplete: true,
  isGameOver: false,
  counter: 0
}

const reducer = (state, action) => {

  switch (action.type) {
    case "setCellOnClick": {
      const { payload } = action
      let customState = { ...state }
      let { activeCount, isLevelComplete, isLevelReadyForClick, life, isGameOver, userGrid } = state

      if (isGameOver) {
        return;
      }
      const memoryGridValueAtClickedPosition = state.memoryGrid[payload.rowIndex][payload.colIndex];
      const userGridValueAtClickedPosition = state.userGrid[payload.rowIndex][payload.colIndex];
      if (memoryGridValueAtClickedPosition === 1 && userGridValueAtClickedPosition === 0) {
        userGrid[payload.rowIndex][payload.colIndex] = 1;
        customState = { ...customState, activeCount: state.activeCount - 1 };
        if (activeCount === 0) {
          isLevelComplete = true;
          isLevelReadyForClick = false;

        } else {
          life = life - 1;
        }

        if (life === 0) {
          isGameOver = true;


        }
     
        return { ...customState, isLevelComplete, isLevelReadyForClick, life, isGameOver }
      }
     

      return { ...customState, isLevelComplete, isLevelReadyForClick, life, isGameOver }
    }
    case "onNextLevel": {
      let customState = { ...state }
      customState.level = customState.level + 1;
      if (customState.rows === customState.cols) {
        customState.rows = customState.rows + 1;
      } else {
        customState.cols = customState.cols + 1;
      }
      const { grid, activeCount } = getMemoryGrid(customState.rows, customState.cols);
      customState.memoryGrid = grid;
      customState.userGrid = grid;
      customState.activeCount = activeCount;
      customState.isLevelComplete = false;
      return customState
    }
    case "setEmptyUserGrid": {
      let customState = { ...state }
      customState.userGrid = getEmptyGrid(customState.rows, customState.cols);

      return customState
    }
    case "setLevelReadyForClick": {
      let customState = { ...state }
      const { payload } = action
      customState.isLevelReadyForClick = payload;
      return customState
    }
    case "onReset": {
      return initialState
    }

    default:
      break;
  }

}




export const GameContext = createContext();

export const GameContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
}