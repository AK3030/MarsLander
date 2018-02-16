## Lunar Lander

### Background and Overview

Lunar Lander is a game in which players guide a vehicle and attempt to safely land it on different surfaces. The player has control of the angle of the vehicle and one thruster to guide its descent. The game starts with the lander already in the air and flat sections of ground with score multipliers visible. In addition to guiding the lander to a safe landing the user must also make sure that the player does not run out of fuel before landing.

### Functionality & MVP
- [ ] gravity
- [ ] control over pitch of lander
- [ ] control over single thruster
- [ ] visible fuel meter
- [ ] introduction page or modal that explains how the game works
### Wireframes
Lunar lander will be a one page app that displays the lander, the environment, your score, and a fuel gauge. The top will include github and linkedin links as well as a link to a page or modal that explains the game.

![wireframe](https://i.imgur.com/IehikxR.png)


## Architecture and Technologies
- Vanilla Javascript
- HTML5 Canvas
- Webpack

`Surface.js` will hold the environment

`Lander.js` will hold the lander physics and controls

## Timeline

Day 1:
- [X] Review and complete asteroids project to familiarize myself with canvas


Day 2
- [X] display static ship on canvas
- [X] Get gravity working
- [X] get vertical functionality working (physics and controls)

Day 3:
- [X] rotate lander functionality
- [X] collision logic
- [X] Write landing logic

Day 4:
- [X] finish landing logic
- [X] add fuel meter and score

Bonus features
- leaderboard
- sound
- enemies
- tougher obstacles/landing pads
