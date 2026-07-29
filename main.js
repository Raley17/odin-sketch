// Container Div

const newCont = document.createElement("div");
newCont.classList.add("container");
document.body.appendChild(newCont);

// Default Grid
for (let i = 1; i < 17; i++) {
  const crDiv = document.createElement("div");
  crDiv.classList.add("cube");
  newCont.appendChild(crDiv);
}

// New Grid Button
const newGridBtn = document.createElement("button");
newGridBtn.classList.add("gridBtn");
newGridBtn.textContent = "New Grid";
document.body.appendChild(newGridBtn);

// New grid size prompt

function newGrid(value) {
  if (value % 4 === 0 && value < 100) {
    newCont.innerHTML = "";
    for (let i = 1; i <= value; i++) {
      const createDiv = document.createElement("div");
      createDiv.classList.add("cube");
      newCont.appendChild(createDiv);
    }
  } else {
    alert("Your new grid isn't / 4");
  }
}

newGridBtn.addEventListener("click", () => {
  const value = prompt("Enter your new grid size (Must be / by 4)");
  newGrid(value);
});
