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

// Array with acceptable values

const acceptableValues = [4, 9, 16, 25, 36, 49, 64, 81, 100];

// New grid size prompt

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

// New Grid Button

newGridBtn.addEventListener("click", () => {
  const value = Number(prompt("Enter your new grid size"));
  newGrid(value);
});

// Text with acceptable values

const possValues = document.createElement("p");
possValues.style.marginBottom = "1rem";
possValues.style.color = "white";
possValues.textContent =
  "Enter one of these values 4, 9, 16, 25, 36, 49, 64, 81, 100.";
possValues.classList.add("valueList");
document.body.appendChild(possValues);

// Random RGB function

newCont.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("cube")) {
    // Give me the counter, if doesn't exist, use 0
    let count = Number(e.target.dataset.count) || 0;

    if (count >= 10) return;

    count++;
    // Without this line the counter would be 0 everytime
    e.target.dataset.count = count;

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    e.target.style.opacity = count * 0.1;
  }
});
