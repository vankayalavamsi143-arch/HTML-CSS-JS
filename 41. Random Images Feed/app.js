const container = document.querySelector(".content");
const baseURL = "https://picsum.photos";
const rows = 7;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  const width = randomNumber();
  const height = randomNumber();

  img.src = `${baseURL}/${width}/${height}`;
  img.alt = "Random Image";

  container.appendChild(img);
}

function randomNumber() {
  return Math.floor(Math.random() * 100) + 300; // 300–399
}