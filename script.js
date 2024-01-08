let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");
let msg = document.querySelector(".msg-para");
let msgContainer = document.querySelector(".msg");
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

const reset = () => {
  for (const box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  msgContainer.style.display = "none";
};

resetBtn.addEventListener("click", reset);
newGame.addEventListener("click", reset);

const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.style.display = "block";
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 == posVal2 && posVal2 == posVal3) {
        disabledBoxes();
        showWinner(posVal1);
        return;
      }
    }
  }

  if ([...boxes].every((box) => box.innerText !== "")) {
    msg.innerText = "It's a draw!";
    msgContainer.style.display = "block";
  }
};
