import { useCallback,useContext } from "react";
import styled from "styled-components";
import { GameContext } from "../../context";
import { Button } from "../styles/common";

const Container = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const {dispatch}=useContext(GameContext)
  const startClickHandler = useCallback(
    function () {
      dispatch({type:"onNextLevel"})
    },
    [dispatch]
  );

  return (
    <Container>
      <header>
        <h1>Memory Game</h1>
      </header>
      <div>
        <div style={{ margin: "50px" }}>
          <p>Remember the colored boxes displayed and click on the boxes once the game starts</p>
          <p>Difficulty will increase with each level</p>
        </div>
        <Button large onClick={startClickHandler}>
          Start
        </Button>
      </div>
    </Container>
  );
}
