const buttons = document.querySelectorAll("span");
// console.log(buttons);
const body = document.querySelector("body");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);

    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }

    if (e.target.id === "red") {
      body.style.backgroundColor = "red";
    }

    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
  });
});
