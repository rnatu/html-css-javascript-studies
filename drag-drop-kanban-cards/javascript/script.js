const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

// our cards
cards.forEach((card) => {
  card.addEventListener("drag", drag);
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("dragend", dragend);
});

function dragstart({ target }) {
  dropzones.forEach((dropzone) => {
    dropzone.classList.add("highlight");
  });

  target.classList.add("is-dragging");
}

function drag() {
  // console.log("drag");
}

function dragend({ target }) {
  dropzones.forEach((dropzone) => {
    dropzone.classList.remove("highlight");
    target.classList.remove("is-dragging");
  });

  target.classList.remove("is-dragging");
}

// // our dropzone card
dropzones.forEach((dropzone) => {
  //   dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragleave", () => dragleave(dropzone));
  dropzone.addEventListener("dragover", (event) => dragover(event, dropzone));
  dropzone.addEventListener("drop", () => drop(dropzone));
});

// function dragenter() {
//   console.log("dragenter");
// }
function dragleave(dropzone) {
  dropzone.classList.remove("over");
}

function dragover(event, dropzone) {
  event.preventDefault();
  dropzone.classList.add("over");
}
function drop(dropzone) {
  dropzone.classList.remove("over");
}
