// create wrapper
let body = document.querySelector("body");
let wrapper = document.createElement("div");
wrapper.className = "wrapper";
body.append(wrapper); 

// create title
let title = document.createElement("p");
title.className = "title";
title.textContent = "Виртуальная клавиатура";
wrapper.append(title);

// create textarea
let inputKeyboard = document.createElement("textarea");
inputKeyboard.className = "input-keyboard";
inputKeyboard.id = "textarea";
inputKeyboard.setAttribute("autofocus", "true");
wrapper.append(inputKeyboard);

// create wrapper keyboard
let keyboard = document.createElement("div");
keyboard.className = "keyboard";
keyboard.id = "keyboard";
wrapper.append(keyboard);

// create description
let description = document.createElement("p");
description.className = "description";
description.textContent = "Клавиатура создана в операционной системе Windows";
wrapper.append(description);

// create language
let language = document.createElement("p");
language.className = "language";
language.textContent = "Для переключения языка комбинация: левыe Shift + Alt";
wrapper.append(language);

// cases keyboard
const keyDownEn = [
  ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
  ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", '\\', 'Del', ],
  ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '▲', "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];

// keys codes
const keyId = [
  ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",],
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete",],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",],
  ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",],
  ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"],
];

// create key 
for (let i = 0; i < keyDownEn.length; i++) {
  let row = document.createElement("div");
  row.className = "row";
  keyboard.append(row); 

  for (let j = 0; j < keyDownEn[i].length; j++) {
    let key = document.createElement("div");
    key.className = `key ${keyId[i][j]}`;
    key.textContent = keyDownEn[i][j];  
    key.id = keyId[i][j];
    row.append(key);
  };
}

let keys = document.querySelectorAll(".key");

document.addEventListener("keydown", (event) => {  
  keys.forEach((key) => {
    if (event.code == key.id) {
      key.classList.add("active");
    }    
  })
});

document.addEventListener("keyup", (event) => {
  keys.forEach((key) => {
    if (event.code == key.id) {
      key.classList.remove("active");
    }
  });
});

let keyboardDiv = document.getElementById("keyboard");

keyboardDiv.addEventListener("mousedown", (event) => {
  keys.forEach((key) => {
    if (event.target.id == key.id) {
      key.classList.add("active");
    }
  });
});

keyboardDiv.addEventListener("mouseup", (event) => {
  keys.forEach((key) => {
    if (event.target.id == key.id) {
      key.classList.remove("active");
    }
  });
});

// console.log(event);
// console.log(event.code); // ShiftRight или ShiftLeft
// console.log(event.key); //  Shift        