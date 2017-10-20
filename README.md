# Lab 4 - JavaScript Labs
Over the course of the next few labs, you will be creating a simple role-playing game. The game involves two players - the prompted user (you!) and the Almighty Grant. The game consists of simulated attacks that reduce the total health points of each player.

The game will be built in 4 stages:
1. Set up the basic functionality of the game
2. Complicate the game by adding fun ction ality
3. Convert characters to objects
4. Add a front-end to your game

# JavaScript Lab Part Two

## Task:
Expand on the game by adding functions that allow the user to start the game and get a number to use as damage.

## What does the application do?
1. The application now has a startGame function, which will prompt the user if they would like to play. Call the startCombat function after the user enters a character’s name.
2. There is a startCombat function. When executed, this will run the loop you created in Part One.
3. There is a getDamage function. This will return a number between 1 and 5 that will be used to decide how much damage the user and Grant will deal each round.

## Build Specifications:
1. Each iteration of the loop will include a prompt that will ask the user if they would like to “attack” or “quit”.
2. If the user decides to attack, adjust the character’s health points and Grant’s health points based on the getDamage function.
3. If the user decides to quit, figure out a way to exit out of the loop and function.