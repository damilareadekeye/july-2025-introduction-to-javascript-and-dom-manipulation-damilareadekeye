// PLP 5 — JavaScript Fundamentals
// Parts 1–4 implemented with clear sections and comments.

// ---------- Part 1: Basics (variables, types, operators, conditionals)
const form = document.getElementById('basicForm');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const evalResult = document.getElementById('evalResult');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = String(nameInput.value || '').trim();
  const ageValue = Number(ageInput.value);

  // Conditionals + operators
  if (!userName || Number.isNaN(ageValue)) {
    evalResult.textContent = 'Please enter a valid name and age.';
    return;
  }

  const isAdult = ageValue >= 18; // comparison operator
  const message = isAdult
    ? `Hello, ${userName}. You are an adult.`
    : `Hello, ${userName}. You are a minor.`;

  evalResult.textContent = message;
});

// ---------- Part 2: Functions (reusable logic)
const priceInput = document.getElementById('priceInput');
const qtyInput = document.getElementById('qtyInput');
const calcBtn = document.getElementById('calcBtn');
const totalResult = document.getElementById('totalResult');

/**
 * calculateTotal: multiplies price and quantity and returns a formatted string
 */
function calculateTotal(price, quantity) {
  const total = Number(price) * Number(quantity);
  if (Number.isNaN(total)) return '—';
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(total);
}

/**
 * formatFullName: trims and title-cases a full name string
 */
function formatFullName(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

calcBtn.addEventListener('click', () => {
  totalResult.textContent = calculateTotal(priceInput.value, qtyInput.value);
});

const formatInput = document.getElementById('formatInput');
const formatBtn = document.getElementById('formatBtn');
const formatResult = document.getElementById('formatResult');

formatBtn.addEventListener('click', () => {
  formatResult.textContent = formatFullName(formatInput.value);
});

// ---------- Part 3: Loops (arrays, while)
const fruits = ['Mango', 'Pineapple', 'Banana', 'Orange', 'Guava'];
const fruitsList = document.getElementById('fruitsList');

// Loop example 1: forEach to render list items
fruits.forEach((fruit) => {
  const li = document.createElement('li');
  li.textContent = fruit;
  fruitsList.appendChild(li);
});

// Loop example 2: while loop countdown
const countdownBtn = document.getElementById('countdownBtn');
const countdownOut = document.getElementById('countdownOut');

countdownBtn.addEventListener('click', () => {
  let n = 5;
  const parts = [];
  while (n >= 0) {
    parts.push(String(n));
    n = n - 1; // decrement
  }
  countdownOut.textContent = parts.join(' → ');
});

// ---------- Part 4: DOM (select, toggle classes, create elements, events)
const toggleBtn = document.getElementById('toggleBtn');
const toggleTarget = document.getElementById('toggleTarget');
const addNoteBtn = document.getElementById('addNoteBtn');
const notes = document.getElementById('notes');

// DOM interaction 1: toggle class on click
toggleBtn.addEventListener('click', () => {
  toggleTarget.classList.toggle('hidden');
});

// DOM interaction 2: create and append element
addNoteBtn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.className = 'note';
  const now = new Date();
  div.textContent = `New note at ${now.toLocaleTimeString()}`;
  notes.appendChild(div);
});

// DOM interaction 3: toggle theme on body
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('theme--light');
});


