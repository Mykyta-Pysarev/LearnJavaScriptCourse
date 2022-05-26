'use strict';

const template = "%TEAM_A% vs %TEAM_B% game score is %SCORE%. Fans of %WINNER% already started celebrating on the streets of the %GAME_CITY%, %GAME_COUNTRY%."

function postBuilder(template, gameInfo) {
    const info = {
        '%TEAM_A%': gameInfo.teamA,
        '%TEAM_B%': gameInfo.teamB,
        '%SCORE%': `${gameInfo.teamAGameScore}:${gameInfo.teamBGameScore}`,
        '%GAME_CITY%': gameInfo.city,
        '%GAME_COUNTRY%': gameInfo.country,
    };

    
    if(gameInfo.teamAGameScore > gameInfo.teamBGameScore){
      info['%WINNER%'] = gameInfo.teamA;
    } else if (gameInfo.teamAGameScore === gameInfo.teamBGameScore){
      info['%WINNER%'] = `both teams`;
    } else {
      info['%WINNER%'] = gameInfo.teamB;
    }
  
    for (let keys in info) {
        template = template.replace(keys, info[keys]);
    }

    return template;

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