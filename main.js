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

const acceptableValues = [4, 9, 16, 25, 36, 49, 64, 81, 100];

function newGrid(value) {
  if (acceptableValues.includes(value)) {
    newCont.innerHTML = "";
    for (let i = 1; i <= value; i++) {
      const createDiv = document.createElement("div");
      createDiv.classList.add("cube");
      createDiv.style.width = `${32 / Math.sqrt(value)}rem`;
      createDiv.style.height = `${32 / Math.sqrt(value)}rem`;
      newCont.appendChild(createDiv);
    }
  } else {
    alert("You submitted a wrong value!");
  }
}

newGridBtn.addEventListener("click", () => {
  const value = Number(prompt("Enter your new grid size"));
  newGrid(value);
});

const possValues = document.createElement("p");
possValues.style.marginBottom = "1rem";
possValues.style.color = "white";
possValues.textContent =
  "Enter one of these values 4, 9, 16, 25, 36, 49, 64, 81, 100.";
possValues.classList.add("valueList");
document.body.appendChild(possValues);
