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

function dragleave(dropzoneElement) {
  dropzoneElement.classList.remove("over");
}

function dragover(event, dropzoneElement) {
  // this = dropzone;
  event.preventDefault();
  dropzoneElement.classList.add("over");

  const actualDropzoneClassState = dropzoneElement.classList[1];

  // get dragging card
  const cardBeingDragged = document.querySelector(".is-dragging");

  const status = cardBeingDragged.querySelector(".status");

  const switchStatus = {
    todo: () => {
      status.classList.remove("status--inProgress", "status--done");
      status.classList.add("status--todo");
    },
    inProgress: () => {
      status.classList.remove("status--todo", "status--done");
      status.classList.add("status--inProgress");
    },
    done: () => {
      status.classList.remove("status--todo", "status--inProgress");
      status.classList.add("status--done");
    },
  };

  switchStatus[actualDropzoneClassState]();

  dropzoneElement.appendChild(cardBeingDragged);
}
function drop(dropzoneElement) {
  dropzoneElement.classList.remove("over");
}
