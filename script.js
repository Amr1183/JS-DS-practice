    "use strict";

    //Coding challenge #1

    const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",
        ],
        [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    };
    //1.
    const [players1, players2] = game.players;
    console.log(players1, players2);

    //2.
    const [gk, ...fieldPlayers] = players1;
    console.log(gk, fieldPlayers);

    //3.
    const allPlayers = [...players1, ...players2];
    console.log(allPlayers);

    //4.
    const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
    console.log(playersFinal);

    //5.
    const {
    odds: { team1, x: draw, team2 },
    } = game;
    console.log(team1, draw, team2);

    //6.
    const printGoals = function (...playerName) {
    console.log(playerName);
    console.log(`${playerName.length} goals were scored`);
    };
    printGoals(...game.scored);

    //7.
    team1 < team2 && console.log("Team 1 is more likely to win");
    team1 > team2 && console.log("Team 2 is more likely to win");

    //Coding challenge #2

    //1*
    for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1} : ${player}`);
    }

    //2*
    const odds = Object.values(game.odds);

    let average = 0;

    for (const odd of odds) average += odd;
    average /= odds.length;
    console.log(average);

    //3*
    const oddEnt = Object.entries(game.odds);
    for (const [team, odd] of oddEnt) {
    const teamStr = team === "x" ? "Draw" : `victory of ${game[team]}`;
    console.log(`Odd of ${teamStr} : ${odd}`);
    }

    //Bonus
    const scorers = {};

    for (const scorer of game.scored) {
    scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
    }
    console.log(scorers);
    for (const [player, goals] of Object.entries(scorers)) {
    console.log(`${player}: ${goals},`);
    }

    //Coding challenge #3

    const gameEvents = new Map([
    [17, "⚽ GOAL"],
    [36, "� Substitution"],
    [47, "⚽ GOAL"],
    [61, "� Substitution"],
    [64, "� Yellow card"],
    [69, "� Red card"],
    [70, "� Substitution"],
    [72, "� Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "� Yellow card"],
    ]);

    //1.
    const events = [...new Set(gameEvents.values())];
    console.log(events);

    //2.
    gameEvents.delete(64);
    console.log(gameEvents);

    //3.
    const eventAVG = 90 / gameEvents.size;
    console.log(`An event happened on average, every ${eventAVG} minutes`);

    //4.
    for (const [min, event] of gameEvents) {
    const half = min <= 45 ? "FIRST" : "SECOND";
    console.log(`[${half} HALF] ${min}: ${event}`);
    }

    //Coding challenge #4

    //1.
    document.body.append(document.createElement("textarea"));
    document.body.append(document.createElement("button"));

    document.querySelector("button").addEventListener("click", function () {
    const text = document.querySelector("textarea").value;
    const rows = text.split("\n");
    console.log(rows);

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split("_");
        const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
    }
    });

    //Strings practice
    const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

    for (const flight of flights.split("+")) {
    const [type, from, to, time] = flight.split(";");
    const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
        "_",
        " "
    )} from ${from.slice(0, 3).toUpperCase()} to ${to
        .slice(0, 3)
        .toUpperCase()} (${time.replace(":", "h")})`.padStart(62);
    console.log(output);
    }

