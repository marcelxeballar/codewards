/*

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

const rps = (p1, p2) => {
  const  turns = ["rock", "paper", "scissors"];
  
  if (p1 === p2) return "Draw!"
  return `Player ${(p2 === turns[(turns.indexOf(p1)+ 1) % 3]) ? 2 : 1} won!`
};

