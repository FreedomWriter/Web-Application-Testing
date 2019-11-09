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
  away,
  homeAtBat,
  awayAtBat
}) {
  //   console
  //     .log
  //     `Props from Dashboard - foul: ${foul}, ball: ${ball}, strike: ${strike}, hit: ${hit}, count: ${count}, player: ${player}, inning: ${inning}, home: ${home}, away: ${away}`
  // ();
  return (
    <div>
      <Player>
        <h2>AT BAT</h2>
        <div className="player">{player}</div>
        {homeAtBat ? (
          <h3 className="home">Home at Bat</h3>
        ) : (
          <h3 className="away">Away at Bat</h3>
        )}
      </Player>
      <div className="container">
        {/* <ScoreBoard></ScoreBoard> */}
        <Center>
          <h3>Away</h3>
          <DisplayBox>{away}</DisplayBox>
        </Center>
        <Center>
          <h3>INNING</h3>
          <DisplayBox>{inning}</DisplayBox>
        </Center>
        <Center>
          <h3>Home</h3>
          <DisplayBox>{home}</DisplayBox>
        </Center>
      </div>
      <div className="container">
        <Center>
          <h2>BALL</h2>
          <DisplayBox>{ball}</DisplayBox>
        </Center>
        <Center>
          <h2>STRIKE</h2>
          <DisplayBox>{strike}</DisplayBox>
        </Center>
        <Center>
          <h2>OUT</h2>
          <DisplayBox>{outs}</DisplayBox>
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
  border: 1px solid #414141;
  width: 32%;
  height: 100px;
  padding: 2%;
  background: green;
  color: #ffffff;
`;

const Player = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #414141;
  height: 100px;
  padding: 2%;
  margin: 2%;
  font-size: 2rem;
  background: #414141;
  color: #ffffff;
  width: 60%;
  margin: 2% auto;
`;

const DisplayBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #414141;
  width: 32%;
  height: 100px;
  padding: 2%;
  background: white;
  color: #414141;
`;
