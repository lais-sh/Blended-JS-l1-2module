// ==================== Завдання 1 ====================
const number = Number(prompt("Введіть число:"));
if (number === 10) {
  alert("Вірно");
} else {
  alert("Невірно");
}

// ==================== Завдання 2 ====================
const min = Math.floor(Math.random() * 60); // від 0 до 59
let quarter = "";

if (min < 15) {
  quarter = "перша";
} else if (min < 30) {
  quarter = "друга";
} else if (min < 45) {
  quarter = "третя";
} else {
  quarter = "четверта";
}

alert(`${min} входить в ${quarter} чверть`);

// ==================== Завдання 3 ====================
const seasonInput = prompt("Введіть число від 1 до 4:");
let result = "";

switch (seasonInput) {
  case "1":
    result = "зима";
    break;
  case "2":
    result = "весна";
    break;
  case "3":
    result = "літо";
    break;
  case "4":
    result = "осінь";
    break;
  default:
    result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
}

console.log(result);

// ==================== Завдання 4 ====================
const minutes = Number(prompt("Введіть кількість хвилин:"));
const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
const mins = String(minutes % 60).padStart(2, "0");

console.log(`${hours}:${mins}`);

// ==================== Завдання 5 ====================
const login = prompt("Введіть логін:");

if (login === "Адмін") {
  const password = prompt("Введіть пароль:");
  if (password === "Я головний") {
    alert("Добрий день!");
  } else if (!password) {
    alert("Скасовано");
  } else {
    alert("Невірний пароль!");
  }
} else if (!login) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}

// ==================== Завдання 6 ====================
let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}

// ==================== Завдання 7 ====================
function getNumbers(min, max) {
  let sumEven = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sumEven += i;
    }
  }
  return sumEven;
}
console.log("Сума парних:", getNumbers(5, 16));

// ==================== Завдання 8 ====================
function min(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Not a number!";
  }
  return a < b ? a : b;
}
console.log(min(5, 3)); // 3
console.log(min("5", 3)); // Not a number!

// ==================== Завдання 9 ====================
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Вам ще немає 18. Ви впевнені?");
  }
}
console.log(isAdult(17)); // true/false

// ==================== Завдання 10 ====================
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(20);
