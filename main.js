window.onload = function() {  
  createStructure();
  restoreState();
  isCapsAndLang();
  pressKeyHandler();
  pressMouseHandler(); 
  clickMouseHandler();
};

const createStructure = () => {
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
  language.textContent = "Для переключения языка комбинация: Shift + Alt";
  wrapper.append(language);
};

// cases En keyboard
const keyDownEn = [
  ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
  ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", '\\', 'Del', ],
  ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '▲', "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const keyUpEn = [
  ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace', ],
  ['Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", '|', 'Del', ],
  ['CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", 'Enter',],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '▲', "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const keyCapsEn = [
  ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
  ['Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", '\\', 'Del', ],
  ['CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", 'Enter',],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", '▲', "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const keyShiftCapsEn = [
  ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace', ],
  ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", '|', 'Del', ],
  ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "▲", "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];

// cases Ru keyboard
const keyDownRu = [
  ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
  ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", '\\', 'Del', ],
  ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter',],
  ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const keyUpRu = [
  ['Ё', '!', "@", "#", "$", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', ],
  ['Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", '/', 'Del', ],
  ['CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter',],
  ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const keyCapsRu = [
  ['Ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
  ['Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", '\\', 'Del', ],
  ['CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter',],
  ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "▲", "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const keyShiftCapsRu = [
  ['ё', '!', "@", "#", "$", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', ],
  ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", '/', 'Del', ],
  ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter',],
  ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "▲", "Shift", ],
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

// сохранение языка
let lang = "en";
let checkCaps = false;

const saveState = () => {
  localStorage.setItem("keyboard-lang", lang);
};

const restoreState = () => {
  lang = localStorage.getItem("keyboard-lang")
    ? localStorage.getItem("keyboard-lang")
    : "en";
};

// создание кнопок
const createKey = (array) => {
  for (let i = 0; i < array.length; i++) {
    let row = document.createElement("div");
    row.className = "row";
    keyboard.append(row);

    for (let j = 0; j < array[i].length; j++) {
      let key = document.createElement("div");
      key.className = `key ${keyId[i][j]}`;
      key.textContent = array[i][j];
      key.setAttribute('id', keyId[i][j]);
      row.append(key);
    }
  }
}

// обработка Caps
const keyboardCaps = () => {
  checkCaps = document
    .getElementById("CapsLock")
    .classList.contains("press")
    ? true : false;
  return checkCaps; 
}

// обработка shift
const checkShift = () => {
  let shiftActive = document
    .getElementById("ShiftLeft")
    .classList.contains("press");
  let rShiftActive = document
    .getElementById("ShiftRight")
    .classList.contains("press");
  if (shiftActive || rShiftActive) {
    return true;
  }
  return false;
};

// вызов смены раскладки по клику мышкой
const toggleCasesClick = (event) => {

  //вызов смены раскладки на шифт+альт
  if (
    checkShift() &&
    (event.target.id === "AltLeft" || event.target.id === "AltRight")
  ) {
    changeLanguage();
    
    // вызов смены раскладки на капс+шифт
  } else if (checkShift() && keyboardCaps()) {
    if (checkCaps && lang == "ru") {
      deleteKeys();
      createKey(keyShiftCapsRu);
      document.getElementById("CapsLock").classList.toggle("press");
      if (event.code === "ShiftLeft") {
        document.getElementById("ShiftLeft").classList.toggle("press");
      } else if (event.code === "ShiftRight") {
        document.getElementById("ShiftRight").classList.toggle("press");
      }
    }
  } // вызов смены раскладки на капс
   else if (event.target.id === "CapsLock" && !checkShift()) {
    keyboardCaps();
    if (!checkCaps && lang == "ru") {
      deleteKeys();
      createKey(keyDownRu);
    } else if (checkCaps && lang == "ru") {
      deleteKeys();
      createKey(keyCapsRu);
      document.getElementById("CapsLock").classList.toggle("press");
    } else if (checkCaps && lang == "en") {
      deleteKeys();
      createKey(keyCapsEn);
      document.getElementById("CapsLock").classList.toggle("press");
    } else if (!checkCaps && lang == "en") {
      deleteKeys();
      createKey(keyDownEn);
    }
    // вызов смены раскладки на шифт
  } else if (event.target.id === "ShiftLeft" || event.target.id === "ShiftRight") {
    if (checkShift() && lang == "ru") {
      deleteKeys();
      createKey(keyUpRu);
      if (event.target.id === "ShiftLeft") {
        document.getElementById("ShiftLeft").classList.toggle("press");
      } else if (event.target.id === "ShiftRight") {
        document.getElementById("ShiftRight").classList.toggle("press");
      }
    } else if (!checkShift() && lang == "ru") {
      deleteKeys();
      createKey(keyDownRu);
    } else if (checkShift() && lang == "en") {
      deleteKeys();
      createKey(keyUpEn);
      if (event.target.id === "ShiftLeft") {
        document.getElementById("ShiftLeft").classList.toggle("press");
      } else if (event.target.id === "ShiftRight") {
        document.getElementById("ShiftRight").classList.toggle("press");
      }
    } else if (!checkShift() && lang == "en") {
      deleteKeys();
      createKey(keyDownEn);
    }
  }
}

// вызов смены раскладки по key
const toggleCasesPress = (event) => {
  
  //вызов смены раскладки на шифт+альт
  if (checkShift() &&
    (event.code === "AltLeft" || event.code === "AltRight")
  ) {
    changeLanguage();

    // вызов смены раскладки на капс+шифт
  } else if (checkShift() && keyboardCaps()) {
    if (checkCaps && lang == "ru") {
      deleteKeys();
      createKey(keyShiftCapsRu);
      document.getElementById("CapsLock").classList.toggle("press");
      if (event.code === "ShiftLeft") {
        document.getElementById("ShiftLeft").classList.toggle("press");
      } else if (event.code === "ShiftRight") {
        document.getElementById("ShiftRight").classList.toggle("press");
      }
    }

    // вызов смены раскладки на капс
  } else if (event.code === "CapsLock" && !checkShift()) {
    keyboardCaps();  
    if (!checkCaps && lang == "ru") {
      deleteKeys();
      createKey(keyDownRu);
    } else if (checkCaps && lang == "ru") {
      deleteKeys();
      createKey(keyCapsRu);
      document.getElementById("CapsLock").classList.toggle("press");
    } else if (checkCaps && lang == "en") {
      deleteKeys();
      createKey(keyCapsEn);
      document.getElementById("CapsLock").classList.toggle("press");
    } else if (!checkCaps && lang == "en") {
      deleteKeys();
      createKey(keyDownEn);
    }

    // вызов смены раскладки на шифт
  } else if ((event.code === "ShiftLeft" || event.code === "ShiftRight")) {
    if (checkShift() && lang == "ru") {
      deleteKeys();
      createKey(keyUpRu);
      if (event.code === "ShiftLeft") {
        document.getElementById("ShiftLeft").classList.toggle("press");
      } else if (event.code === "ShiftRight") {
        document.getElementById("ShiftRight").classList.toggle("press");
      }
    } else if (!checkShift() && lang == "ru") {
      deleteKeys();
      createKey(keyDownRu);
    } else if (checkShift() && lang == "en") {
      deleteKeys();
      createKey(keyUpEn);
      if (event.code === "ShiftLeft") {
        document.getElementById("ShiftLeft").classList.toggle("press");
      } else if (event.code === "ShiftRight") {
        document.getElementById("ShiftRight").classList.toggle("press");
      }
    } else if (!checkShift() && lang == "en") {
      deleteKeys();
      createKey(keyDownEn);
    }
  }
}

// смена языка
const changeLanguage = () => {
  if (lang === "en") {
    lang = "ru";
    saveState();
    changeKeyboard(lang);
  } else if (lang === "ru") {
    lang = "en";
    saveState();
    changeKeyboard(lang);
  }
};

// смена раскладки
const changeKeyboard = (lang) => {
  deleteKeys();  
  isCapsAndLang(lang); 
};

// удаление раскладки
const deleteKeys = () => {
  while (keyboard.hasChildNodes()) {
    keyboard.removeChild(keyboard.firstChild);
  }
};

// первый рендер раскладки
const isCapsAndLang = () => {  
  if (checkCaps && lang == "ru") {
    createKey(keyCapsRu);
  } else if (!checkCaps && lang == "ru") {
    createKey(keyDownRu);
  } else if (checkCaps && lang == "en") {
    createKey(keyCapsEn);
  } else if (!checkCaps && lang == "en") {
    createKey(keyDownEn);
  }
}

// подсветка по нажатию на клавишу
const pressedKey = (event) => {  
  document.querySelectorAll(".key").forEach((key) => {
    if (event.code == key.id) {
      key.classList.add("active");
      }
  });
      
  if (event.code == "CapsLock") {
    document.getElementById("CapsLock").classList.toggle("press");
  }
  if (event.code == "ShiftLeft") {
    document.getElementById("ShiftLeft").classList.toggle("press");
  }
  if (event.code == "ShiftRight") {
    document.getElementById("ShiftRight").classList.toggle("press");
  } 
}

// снятие подсветки по нажатию на клавишу
const dePressedKey = (event) => {
  document.querySelectorAll(".key").forEach((key) => {
    if (event.code == key.id) {
      key.classList.remove("active");
    }    
  });
};

// подсветка по нажатию мышкой
const pressedKeyClickMouse = (event) => {
  document.querySelectorAll(".key").forEach((key) => {
    if (event.target.id == key.id) {
      key.classList.add("active");
    }    
  });

  if (event.target.id == "CapsLock") {
    document.getElementById("CapsLock").classList.toggle("press");
  }
  if (event.target.id == "ShiftLeft") {
    document.getElementById("ShiftLeft").classList.toggle("press");
  }
  if (event.target.id == "ShiftRight") {
    document.getElementById("ShiftRight").classList.toggle("press");
  }    
};

// снятие подсветки по нажатию мышкой
const dePressedKeyClickMouse = (event) => {
  document.querySelectorAll(".key").forEach((key) => {
    if (event.target.id == key.id) {
      key.classList.remove("active");
    }
  });
};

// обработчик нажатия клавишей
const pressKeyHandler = () => {
  document.addEventListener("keydown", (event) => {
    pressedKey(event);
    toggleCasesPress(event);
  });

  document.addEventListener("keyup", (event) => {
    dePressedKey(event);
  });
};

// обработчик нажатия мышкой
const pressMouseHandler = () => {
  let keyboardDiv = document.getElementById("keyboard"); 
  keyboardDiv.addEventListener("mousedown", (event) => {
    pressedKeyClickMouse(event);
  });

  keyboardDiv.addEventListener("mouseup", (event) => {
    dePressedKeyClickMouse(event);
  });
};

// обработчик клика мышкой
const clickMouseHandler = () => {
  document.getElementById("keyboard").addEventListener("click", (event) => {
    toggleCasesClick(event);
  });
}      