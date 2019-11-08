import React from "react";
import styled from "styled-components";

export default function Dashboard({ foul, ball, strike, hit, count, player }) {
  console.log(
    `Props from Dashboard - foul: ${foul}, ball: ${ball}, strike: ${strike}, hit: ${hit}, count: ${count}`
  );
  return (
    <div>
      <div className="button-container">
        <button>Foul</button>
        <button>Ball</button>
        <button>Strike</button>
        <button>Hit</button>
      </div>
      <Center>
        <label htmlFor={player}> Player at Bat </label>
        <input id={player} value={player} name={player} placeholder={player} />
      </Center>
    </div>
  );
}

const Center = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border: 1px solid red;
  width: 32%;
  height: 100px;
  padding: 2%;
  margin: 0 auto;
  font-size: 1.6rem;
`;
