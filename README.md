-Game for teaching and practicing CSS. Each round will cover a different concept:

ROUND 1: Select the correct RGB color value.

ROUND 2: Use buttons to apply CSS flex-box properties to elements. Make your shapes look like the example.

ROUND 3: Use buttons to apply CSS grid properties to elements. Make your shapes look like the example.

-Scoring will be based on a timer that starts at 15 seconds. On selecting the correct choice the remaining time will be added to the players score. Accuracy is rewarded with "crypto coins" which are not only added to the players score but are accumulated and can be used to 'upgrade' your character.

TECHNOLOGIES -React -React-router-dom -Flask -SQL Alchemy -React Spring -WTForms????

ROUTES

-'/playerPage' <-- starts as login and upon submission renders player name, highscore and amount of crypto coins. Players can scroll through the scoring list, search for other players and transfer crypto coins to other players.

-'/RGBgame' <-- start the game here. BackDrop with RGBboard inside

-'/FlexBox' <-- round 2, Backdrop with FlexBox inside

-./Grid' <-- round 3, Backdrop with Grid inside

Controller.js -Class component containing game state (Score, round, timer, gameOn, coins and coinArray)

RGBcontroller.js -Class component containing colorArray, colorTargetId, colorTarget.

COMPONENTS

Backdrop: renders the Banner, Footer (which appear on every route) as well as either the current game board or the player page.
Banner: renders ScoreTimer GameName and CryptoCoin
Footer renders two Bowl's
RGBboard renders six ColorBall and the target color or 'Correct!' text
ColorBall class component rendering a ball with variable style. Clicking one results in checkGuess() method being run.
MVP's

Player Page featuring CRUD operations: CREATE: user form (csurf protected) UPDATE: player high score if they top prior one UPDATE: player coin count if they earn more or transfer them DELETE: user name --> cascade delete high score and coin count

Add animations to RGB game

Create flex-box round
