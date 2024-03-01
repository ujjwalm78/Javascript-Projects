const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const category = document.querySelector("#category");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      category.innerHTML = `<span>You are underweight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category.innerHTML = `<span>Your BMI is in normal range</span>`;
    } else {
      category.innerHTML = `<span>You are overweight</span>`;
    }
  }
});
