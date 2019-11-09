import React from "react";
import styled from "styled-components";

export default function Dashboard({
  foul,
  ball,
  strike,
  hit,
  count,
  player,
  foulHandler,
  strikeHandler,
  ballHandler,
  hitHandler,
  runHandler,
  changeHandler,
  submitHandler
}) {
  //   console.log(
  //     `Props from Dashboard - foul: ${foul}, ball: ${ball}, strike: ${strike}, hit: ${hit}, count: ${count}, foulHandler: ${foulHandler}, strikeHandler ${strikeHandler}:`
  //   );
  return (
    <div>
      <div className="button-container">
        <button onClick={foulHandler}>Foul</button>
        <button onClick={ballHandler}>Ball</button>
        <button onClick={strikeHandler}>Strike</button>
        <button onClick={hitHandler}>Hit</button>
        <button onClick={runHandler}>Run</button>
      </div>
      <Center>
        <label htmlFor={player}> Player at Bat </label>
        <input
          onChange={changeHandler}
          id={player}
          value={player}
          name={player}
          placeholder={player}
          onSubmit={submitHandler}
        />
      </Center>
    </div>
  );
}

const Center = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border: 1px solid #414141;
  width: 32%;
  height: 100px;
  padding: 2%;
  margin: 0 auto;
  font-size: 1.6rem;
`;
