/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
//To-do list
//change strings to numbers
//change K, Q, J to 10
//change A to 1 or 11
//sum up the array (without A?)
//if statement with A

// let hand = []

function handValue(hand) {
  let score = 0
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J') {
      score = score + 10
    } else if (hand[i] === 'A') {
      score = score + 11
    } else {
      score = score + parseInt(hand[i])
    }
    while (score > 22) {
      score = score - 10
    }
  }

  return score
}

// let sum = []
// let number = []
//
// for (var i = 0; i < hand.length; i++) {
//     if (hand[i] === ("K") {hand[i] = 10}
//     else if ("Q") {"Q" = 10}
//     else if ("J") {"J" = 10}
//     return hand[i]
//   }
//
//
//
//   for (var i = 0; i < hand.length; i++) {
//     console.log(parseInt(hand[i]))
//   }
// }

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
