import "./styles.css";

const h1 = document.createElement("h1");
h1.innerText = "Vanilla JS Counter";

const app = document.getElementById("app");
app.appendChild(h1);
const container = document.createElement("div");
app.appendChild(container);

function btnGenerator(num) {
  for (let i = 0; i < num; i++) {
    // let count = 0;
    const button = document.createElement("button");
    button.className = "btn";
    button.innerText = 0;
    button.style.cssText = `
      width: 90px;
      height: 40px;
      border: none;
      border-radius: 30px;
      box-shadow: 2px 2px 6px #555;
      outline: none;
      cursor: pointer;
      margin-right: 16px
    `;
    container.appendChild(button);
    button.addEventListener("click", function () {
      // count += 1;
      button.innerText = +button.innerText + 1;
    });
    button.addEventListener("click", function () {
      button.style.backgroundColor = colorPicker();
    });
  }
}

function colorPicker() {
  let hexStr = '#';
  for(let i = 0; i < 6; i++) {
    hexStr += Math.floor(Math.random() * 16).toString(16);
  }
  return hexStr;

  // let hexArr = Array.from({ length: 6 }, () =>
  //   Math.floor(Math.random() * 16).toString(16)
  // );
  // return "#" + hexArr.join("");
}

btnGenerator(4);
container.appendChild(document.createElement("br"));
container.appendChild(document.createElement("br"));
const reset = document.createElement("button");
reset.innerText = "Reset";
container.appendChild(reset);
reset.onclick = () => {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.innerText = 0;
    btn.style.backgroundColor = "#eee";
  });
};
