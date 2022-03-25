const hands = ["rock", "paper", "scissor"];
function getHand() {
  var randomNumber = parseInt(Math.random() * 10) % 3;
  return hands[randomNumber];
}
let player1 = {
  name: "adam",
  getHand: function () {
    return getHand();
  },
  winCount: 0,
};
let player2 = {
  name: "sandler",
  getHand: function () {
    return getHand();
  },
  winCount: 0,
};
let player1Win = 0;
let player2Win = 0;
let totalGameCount = 0;
function playRound(player1, player2) {
  let player1hand = player1.getHand();
  let player2hand = player2.getHand();
  console.log(player1.name + " played " + player1hand);
  console.log(player2.name + " played " + player2hand);
  if (player1hand == player2hand) {
    totalGameCount += 1;
    console.log(totalGameCount + ". " + "It's a tie");
  } else if (player1hand == "rock") {
    if (player2hand == "paper") {
      player2Win += 1;
      totalGameCount += 1;
      console.log(totalGameCount + ". " + player2.name + " wins game ");
    }
    if (player2hand == "scissor") {
      player1Win += 1;
      totalGameCount += 1;
      console.log(totalGameCount + ". " + player1.name + " wins game");
    }
  } else if (player1hand == "scissor") {
    if (player2hand == "paper") {
      player1Win += 1;
      totalGameCount += 1;
      console.log(totalGameCount + ". " + player1.name + " wins game ");
    }
    if (player2hand == "rock") {
      player2Win += 1;
      totalGameCount += 1;
      console.log(totalGameCount + ". " + player2.name + " wins game ");
    }
  } else if (player1hand == "paper") {
    if (player2hand == "scissor") {
      player2Win += 1;
      totalGameCount += 1;
      console.log(totalGameCount + ". " + player2.name + " wins game ");
    }
    if (player2hand == "rock") {
      player1Win += 1;
      totalGameCount += 1;
      console.log(totalGameCount + ". " + player1.name + " wins game ");
    }
  } else {
    console.log("ERROR");
  }
}
function playGame(player1, player2, playUntil) {
  if (player1Win < playUntil && player2Win < playUntil) {
    playRound(player1, player2);
    playGame(player1, player2, playUntil);
  }
}
function result() {
  playGame(player1, player2, 5);
  if (player1Win > player2Win) {
    console.log(
      player1.name + "wins game " + player1Win + " out of " + totalGameCount
    );
  } else if (player1Win < player2Win) {
    console.log(
      player2.name + "wins game " + player2Win + " out of " + totalGameCount
    );
  } else {
    console.log("tie game");
  }
}
