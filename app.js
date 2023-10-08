function toggleAccordion(panelToActivate) {
  const buttons =
    panelToActivate.parentElement.querySelectorAll(".accordion__btn");
  const contents = panelToActivate.parentElement.querySelectorAll(
    ".accordion__content"
  );

  buttons.forEach((button) => button.setAttribute("aria-expanded", false));
  panelToActivate
    .querySelector(".accordion__btn")
    .setAttribute("aria-expanded", true);

  contents.forEach((content) => content.setAttribute("aria-hidden", true));
  panelToActivate
    .querySelector(".accordion__content")
    .setAttribute("aria-hidden", false);
}

function initializeApp() {
  const accordionElement = document.querySelector(".accordion");

  accordionElement.addEventListener("click", (e) => {
    e.preventDefault();
    const activePanel = e.target.closest(".accordion__panel");

    if (!activePanel) return;
    toggleAccordion(activePanel);
  });
}

// window.onload = initializeApp;

function rot13(str) {
  const decryptedCode = str;
  const encodedStr = [];
  for (let char of decryptedCode) {
    const asciiCode = char.charCodeAt(0);
    const isUpperCase = asciiCode >= 65 && asciiCode <= 90;
    const isLowerCase = asciiCode >= 97 && asciiCode <= 122;
    if (isUpperCase) {
      if (char >= "A" && char <= "M") {
        encodedStr.push(String.fromCharCode(asciiCode + 13));
      } else if (char >= "N" && char <= "Z") {
        encodedStr.push(String.fromCharCode(asciiCode - 13));
      }
    } else if (isLowerCase) {
      if (char >= "a" && char <= "m") {
        encodedStr.push(String.fromCharCode(asciiCode + 13));
      } else if (char >= "n" && char <= "z") {
        encodedStr.push(String.fromCharCode(asciiCode - 13));
      }
    } else {
      encodedStr.push(char);
    }
  }
  return encodedStr.join("");
}
