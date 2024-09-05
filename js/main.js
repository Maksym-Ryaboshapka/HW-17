// Task 1

const changeTextOnBtn = () => {
  const btnEl = document.querySelector("#btn");
  const inputEl = document.querySelector("#input");

  btnEl.onclick = () => (btnEl.textContent = inputEl.value);
};

changeTextOnBtn();

// Task 2

const changePicture = () => {
  const titleEl = document.querySelector(".task2__title");
  const imgEl = document.querySelector(".task2__img");
  const btnEl = document.querySelector(".task2__btn");

  btnEl.onclick = () => {
    if (titleEl.textContent === "Карпати") {
      titleEl.textContent = "Азовське море";
      imgEl.src = "./images/sea.jpg";
    } else {
      titleEl.textContent = "Карпати";
      imgEl.src = "./images/karpaty.jpg";
    }
  };
};

changePicture();

// Task 3

const changeBrowser = () => {
  const linkEl = document.querySelector(".task3__link");
  const imgEl = document.querySelector(".task3__img");
  const btnEl = document.querySelector(".task3__btn");

  btnEl.onclick = () => {
    if (linkEl.textContent === "FireFox") {
      linkEl.textContent = "Chrome";
      linkEl.href = "https://www.google.com/intl/uk/chrome/";

      imgEl.src = "./images/chrome-logo.png";
      imgEl.alt = "Google Chrome logo";
    } else {
      linkEl.textContent = "FireFox";
      linkEl.href = "https://www.mozilla.org/uk/firefox/";

      imgEl.src = "./images/firefox-logo.png";
      imgEl.alt = "Mozilla Chrome logo";
    }
  };
};

changeBrowser();

// Task 4

const changeFirstItem = () => {
  const listEl = document.querySelector(".task4__list");
  const firstTextEl = listEl.firstElementChild.firstElementChild;
  
  firstTextEl.textContent = "1-й елемент"
};

changeFirstItem()