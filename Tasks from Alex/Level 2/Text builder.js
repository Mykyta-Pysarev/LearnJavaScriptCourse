'use strict';

const template = "%TEAM_A% vs %TEAM_B% game score is %SCORE%. Fans of %WINNER% already started celebrating on the streets of the %GAME_CITY%, %GAME_COUNTRY%."

function postBuilder(template, gameInfo) {
    let info = {
        '%TEAM_A%': gameInfo.teamA,
        '%TEAM_B%': gameInfo.teamB,
        '%SCORE%': `${gameInfo.teamAGameScore}:${gameInfo.teamBGameScore}`,
        '%GAME_CITY%': gameInfo.city,
        '%GAME_COUNTRY%': gameInfo.country,
    };

    info['%WINNER%'] = gameInfo.teamAGameScore > gameInfo.teamBGameScore
    ? gameInfo.teamA 
    : gameInfo.teamAGameScore === gameInfo.teamBGameScore 
    ? `both teams`
    : gameInfo.teamB;

    let array = template.split(',').join(' ,')
    .split('.').join(' .')
    .split(' ');

    for (let keys in info) {
        array = array.map(
            element => element.includes(keys) ? element = info[keys] : element
            );
    }

    return array.join(' ').split(' .')
    .join('.').split(' ,')
    .join(',');

}

console.log(
    postBuilder(template, {
      teamAGameScore: 2,
      teamBGameScore: 0,
      teamA: "Barcelona FC",
      teamB: "Inter Milan",
      city: "Milan",
      country: "Italy",
    })
  ); // "Barcelona FC vs Inter Milan game score is 2:0. Fans of Barcelona FC are already started celebrating on the streets of the Milan, Italy."
  console.log(
    postBuilder(template, {
      teamAGameScore: 0,
      teamBGameScore: 3,
      teamA: "Barcelona FC",
      teamB: "Inter Milan",
      city: "Milan",
      country: "Italy",
    })
  ); // "Barcelona FC vs Inter Milan game score is 0:3. Fans of Inter Milan are already started celebrating on the streets of the Milan, Italy."
  console.log(
    postBuilder(template, {
      teamAGameScore: 0,
      teamBGameScore: 0,
      teamA: "Barcelona FC",
      teamB: "Inter Milan",
      city: "Milan",
      country: "Italy",
    })
  ); // "Barcelona FC vs Inter Milan game score is 0:0. Fans of both teams are already started celebrating on the streets of the Milan, Italy."