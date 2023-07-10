const X = "./assets/icon-x.svg";
const O = "./assets/icon-o.svg";

const user_pick_x = document.getElementById("choice_x");
const user_pick_o = document.getElementById("choice_o");
const first_page = document.getElementById("first_page");
const second_page = document.getElementById("second_page");

const new_game_player = document.getElementById("new_game_player");
const new_game_cpu = document.getElementById("new_game_cpu");
const user_turn_display = document.getElementById("user_turn_display");

const user__result = document.getElementById("user__result");
const tie__result = document.getElementById("tie__result");
const opponent__result = document.getElementById("opponent__result");

const o_user = document.getElementById("o_user");
const x_user = document.getElementById("x_user");
const x__result = document.getElementById("x__result");
const o__result = document.getElementById("o__result");

//RESTART MODAL SECTION
const show_restart_modal = document.getElementById("show_restart_modal");
const restart_modal_container = document.getElementById(
  "restart_modal_container"
);

const restart_modal_cancel = document.getElementById("restart_modal_cancel");
const restart_modal_confirm = document.getElementById("restart_modal_confirm");

//WIN MODAL SECTION
const win_modal_container = document.getElementById("win_modal_container");
const win_modal_quit = document.getElementById("win_modal_quit");
const win_modal_next = document.getElementById("win_modal_next");

//TIE MODAL SECTION
const open_tie_modal_container = document.getElementById(
  "open_tie_modal_container"
);
const tie_modal_quit = document.getElementById("tie_modal_quit");
const tie_modal_next_round = document.getElementById("tie_modal_next_round");

//LOST MODAL

const open_lost_modal_container = document.getElementById(
  "open_lost_modal_container"
);
const close_lost_modal = document.getElementById("close_lost_modal");
const next_round_lost_modal = document.getElementById("next_round_lost_modal");

const boxes = document.querySelectorAll(".box");

//X IS THE DEFAULT PLAYER
//NEW GAME VS CPU

var SELECTED_SIDE = "X";
const user_combination = [];
const cpu_combination = [];
const second_user = [];

const WINNING_COMBINATION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

var RESULT = {
  X: 0,
  O: 0,
  TIE: 0,
};

let REMAINING_BOXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//CLEAR DATA FUNCTION
const clearData = () => {
  //CLEAR THE BOARD
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.innerHTML = "";
  });

  //RESET THE REMAINING BOXES
  REMAINING_BOXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  //RESET THE USER COMBINATION
  user_combination.length = 0;
  cpu_combination.length = 0;
  second_user.length = 0;

  //RESET RESULT VARIABLE
  RESULT.X = 0;
  RESULT.O = 0;
  RESULT.TIE = 0;

  o__result.innerHTML = 0;
  x__result.innerHTML = 0;
  tie__result.innerHTML = 0;
};

//WIN MODAL SECTION
win_modal_quit.addEventListener("click", () => {
  win_modal_container.classList.add("hidden");
  first_page.classList.remove("hidden");
  second_page.classList.add("hidden");

  clearData();
});

win_modal_next.addEventListener("click", () => {
  win_modal_container.classList.add("hidden");

  //CLEAR THE BOARD

  boxes.forEach((box) => {
    box.innerHTML = "";
  });

  //RESET THE REMAINING BOXES
  REMAINING_BOXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  //RESET THE USER COMBINATION
  user_combination.length = 0;
  cpu_combination.length = 0;
  second_user.length = 0;
});

//TIE MODAL SELECTION

tie_modal_quit.addEventListener("click", () => {
  //CLOSE THE TIE MODAL
  open_tie_modal_container.classList.add("hidden");
  second_page.classList.add("hidden");
  first_page.classList.remove("hidden");

  //CLEAR DATA
  clearData();
});

tie_modal_next_round.addEventListener("click", () => {
  //CLOSE THE TIE MODAL
  open_tie_modal_container.classList.add("hidden");

  //CLEAR THE BOARD
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.innerHTML = "";
  });

  //RESET THE REMAINING BOXES
  REMAINING_BOXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  //RESET THE USER COMBINATION
  user_combination.length = 0;
  cpu_combination.length = 0;
  second_user.length = 0;
});

const checkUserResults = (combination, user_combination) => {
  //CHECK IF CURRENT COMBINATIONS MATCHES THE WINNING COMBINATION
  for (let i = 0; i < combination.length; i++) {
    if (combination[i].every((item) => user_combination.includes(item))) {
      console.log("PLAYER WIN");
      return 1;
    }
  }

  //check if it is a draw
  if (checkDraw()) {
    console.log("DRAW");
    return 2;
  }

  return 0;
};

const checkOtherPlayerResults = (combination, cpu_combination) => {
  //CHECK IF CURRENT COMBINATIONS MATCHES THE WINNING COMBINATION
  for (let i = 0; i < combination.length; i++) {
    if (combination[i].every((item) => cpu_combination.includes(item))) {
      console.log("CPU WIN");
      return 1;
    }
  }

  //check if it is a draw
  if (checkDraw()) {
    console.log("DRAW");
    return 2;
  }

  return 0;
};

const checkDraw = () => {
  // Check if all the boxes are filled
  return [...boxes].every((box) => {
    return box.innerHTML !== "";
  });
};

//LOST MODAL CONTAINER
close_lost_modal.addEventListener("click", () => {
  //HIDE THE LOST MODAL
  open_lost_modal_container.classList.add("hidden");

  //GO TO FIRST PAGE
  second_page.classList.add("hidden");
  first_page.classList.remove("hidden");
  //HIDE THE SECOND PAGE

  //CLEAR DATA
  clearData();
});

next_round_lost_modal.addEventListener("click", () => {
  //HIDE THE LOST MODAL
  open_lost_modal_container.classList.add("hidden");

  //CLEAR THE BOARD
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.innerHTML = "";
  });

  //RESET THE REMAINING BOXES
  REMAINING_BOXES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  //RESET THE USER COMBINATION
  user_combination.length = 0;
  cpu_combination.length = 0;
  second_user.length = 0;
});

//GET A RANDOM NUMBER FROM THE REMAINING BOXES
const getRandomNumber = () => {
  const random_box = Math.floor(Math.random() * REMAINING_BOXES.length);
  console.log("generated random number: ", REMAINING_BOXES[random_box]);

  return REMAINING_BOXES[random_box];
};

//LISTENER FOR THE NEW GAME VS CPU IS CLICKED
////HIDE THE FIRST PAGE
////SHOW SECOND PAGE

// new_game_cpu.addEventListener("click", () => {
//   //add hidden to the first page modal
//   first_page.classList.add("hidden");
//   //remove hidden to the second page modal
//   second_page.classList.remove("hidden");

//   //IF USER IS X, FIRST TO MOVE
//   if (SELECTED_SIDE === "X") {
//     //LOGIC PLAY
//     //BOX ONCLICK

//     // Add event listeners to the boxes
//     boxes.forEach((box, index) => {
//       box.addEventListener("click", () => {
//         if (box.innerHTML === "") {
//           //update the ui
//           box.innerHTML = '<img src="./assets/icon-x.svg" alt="x" />';
//           user_turn_display.innerHTML = "O";

//           //push the selected value to the selected container
//           user_combination.push(index);

//           // Remove the index from the remaining boxes array
//           REMAINING_BOXES.splice(REMAINING_BOXES.indexOf(index), 1);

//           //check if the user is the winner
//           const check_user_result = checkUserResults(
//             WINNING_COMBINATION,
//             user_combination
//           );

//           if (check_user_result === 0) {
//             //LET CPU PLAY
//             setTimeout(() => {
//               const random_box = getRandomNumber();
//               //ADD THE RANDOM BOX TO THE CPU COMBINATION
//               cpu_combination.push(random_box);

//               // Remove the index from the remaining boxes array
//               REMAINING_BOXES.splice(REMAINING_BOXES.indexOf(random_box), 1);
//               console.log("REMAINING_BOXES", REMAINING_BOXES);

//               //update the box with the CPU choice
//               boxes[random_box].innerHTML = `<img src="${O}" alt="O" />`;

//               const checkCpuResult = checkOtherPlayerResults(
//                 WINNING_COMBINATION,
//                 cpu_combination
//               );

//               //IF CPU WIN, SHOW I LOST
//               if (checkCpuResult) {
//                 //update the result
//                 RESULT.O++;
//                 o__result.innerHTML = RESULT.O;
//               }

//               //UPDATING THE NEXT TURN DISPLAY
//               user_turn_display.innerHTML = "X";
//               // checkCPUWin(WINNING_COMBINATION, cpu_combination);
//             }, 1000);
//           }

//           if (check_user_result === 1) {
//             //USER WIN
//             //SHOW WIN MODAL
//             RESULT.X++;
//             x__result.innerHTML = RESULT.X;
//             win_modal_container.classList.remove("hidden");
//           }
//         }
//       });
//     });
//   } else {
//     //SELECTED_SIDE === 0
//     //LOGIC PLAY
//   }
// });

// Flag variable to track the current turn
let isUserTurn = true;

new_game_cpu.addEventListener("click", () => {
  // Add hidden to the first page modal
  first_page.classList.add("hidden");
  // Remove hidden to the second page modal
  second_page.classList.remove("hidden");

  // IF USER IS X, FIRST TO MOVE
  if (SELECTED_SIDE === "X") {
    // LOGIC PLAY
    // BOX ONCLICK

    // Add event listeners to the boxes
    boxes.forEach((box, index) => {
      box.addEventListener("click", () => {
        // Disable click event if it's not the user's turn
        if (!isUserTurn) {
          return;
        }

        if (box.innerHTML === "") {
          // Update the UI
          box.innerHTML = '<img src="./assets/icon-x.svg" alt="x" />';
          user_turn_display.innerHTML = "O";

          // Push the selected value to the selected container
          user_combination.push(index);

          // Remove the index from the remaining boxes array
          REMAINING_BOXES.splice(REMAINING_BOXES.indexOf(index), 1);

          // Check if the user is the winner
          const check_user_result = checkUserResults(
            WINNING_COMBINATION,
            user_combination
          );

          if (check_user_result === 0) {
            // LET CPU PLAY
            // Disable the user's turn
            isUserTurn = false;

            setTimeout(() => {
              const random_box = getRandomNumber();
              // Add the random box to the CPU combination
              cpu_combination.push(random_box);

              // Remove the index from the remaining boxes array
              REMAINING_BOXES.splice(REMAINING_BOXES.indexOf(random_box), 1);
              console.log("REMAINING_BOXES", REMAINING_BOXES);

              // Update the box with the CPU choice
              boxes[random_box].innerHTML = `<img src="${O}" alt="O" />`;

              const checkCpuResult = checkOtherPlayerResults(
                WINNING_COMBINATION,
                cpu_combination
              );

              // IF CPU WINS, SHOW I LOST
              if (checkCpuResult) {
                // Update the result
                RESULT.O++;
                o__result.innerHTML = RESULT.O;

                //SHOW LOST MODAL
                setTimeout(() => {
                  //show lost  modal
                  open_lost_modal_container.classList.remove("hidden");
                }, 1500);
              }

              // UPDATING THE NEXT TURN DISPLAY
              user_turn_display.innerHTML = "X";
              // checkCPUWin(WINNING_COMBINATION, cpu_combination);

              // Enable the user's turn after CPU's move
              isUserTurn = true;
            }, 1000);
          }

          if (check_user_result === 1) {
            // IF USER WINS THEN SHOW WIN MODAL
            RESULT.X++;
            x__result.innerHTML = RESULT.X;
            win_modal_container.classList.remove("hidden");
          }

          if (check_user_result === 2) {
            //IF THE MATCH IS DRAW

            RESULT.TIE++;
            tie__result.innerHTML = RESULT.TIE;

            //SHOW TIE MODAL
            open_tie_modal_container.classList.remove("hidden");
          }
        }
      });
    });
  } else {
    // SELECTED_SIDE === 0
    // LOGIC PLAY
  }
});
