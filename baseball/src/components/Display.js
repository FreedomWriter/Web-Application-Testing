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
      {/* <Player> */}
      {homeAtBat ? (
        <Player>
          {/* <FlexGrow>
            <h2>AT BAT</h2>
          </FlexGrow> */}
          <div>
            <div className="player">{player}</div>
          </div>
          <h3 className="home">Home Team</h3>
        </Player>
      ) : (
        <Player>
          <h2>AT BAT</h2>
          <h3 className="away">Away at Bat</h3>
          <div className="player">{player}</div>
        </Player>
      )}

      {/* <h2>AT BAT</h2>
        <div className="player">{player}</div>
        {homeAtBat ? (
          <h3 className="home">Home at Bat</h3>
        ) : (
          <h3 className="away">Away at Bat</h3>
        )}
      </Player> */}
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
  border: 1px solid white;
  width: 32%;
  height: 75px;
  padding: 2%;
  background: #252525;
  color: #ffffff;
`;

const Player = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: -3px 3px 4px 2px #a09f9f;
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
  width: 32%;
  height: 100px;
  padding: 2%;
  background: #414141
  color: white;;
`;
