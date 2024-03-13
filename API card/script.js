const div = document.querySelector("div");
const img = document.createElement("img");
img.classList.add("image");
const p = document.createElement("p");
p.classList.add("followers");

const reqUrl = "https://api.github.com/users/hiteshchoudhary";

const xhr = new XMLHttpRequest();

xhr.open("GET", reqUrl);

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    const imgUrl = data.avatar_url;

    img.setAttribute("src", imgUrl);
    p.innerHTML = `Name : ${data.name} <br>Followers : ${data.followers}`;

    div.appendChild(img);
    div.appendChild(p);
  }
};

xhr.send();
