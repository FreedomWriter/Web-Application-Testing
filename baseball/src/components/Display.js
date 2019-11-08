import React from "react";
import styled from "styled-components";

export default function Display({
  foul,
  ball,
  strike,
  hit,
  count,
  outs,
  player,
  inning,
  home,
  away
}) {
  console.log(
    `Props from Dashboard - foul: ${foul}, ball: ${ball}, strike: ${strike}, hit: ${hit}, count: ${count}, player: ${player}, inning: ${inning}, home: ${home}, away: ${away}`
  );
  return (
    <div>
      <Player>
        <h2>AT BAT</h2>
        <div className="player">{player}</div>
      </Player>
      <div className="container">
        <Center>
          <h3>Away</h3>
          <Center>{home}</Center>
        </Center>
        <Center>
          <h3>INNINGS</h3>
          <Center>{inning}</Center>
        </Center>
        <Center>
          <h3>Home</h3>
          <Center>{home}</Center>
        </Center>
      </div>
      <div className="container">
        <Center>
          <h2>BALL</h2>
          <Center>{ball}</Center>
        </Center>
        <Center>
          <h2>STRIKE</h2>
          <Center>{strike}</Center>
        </Center>
        <Center>
          <h2>OUT</h2>
          <Center>{outs}</Center>
        </Center>
      </div>
    </div>
  );
}

const Center = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  width: 32%;
  height: 100px;
  padding: 2%;
`;

const Player = styled.div`
  display: flex;
  flex-flow: column nowrap
  justify-content: center;
    align-items: center;
    border: 1px solid red;
    height: 100px;
    padding: 2%;
    margin:  2%;
    font-size: 2rem;
  `;
