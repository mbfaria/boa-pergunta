const homeScreen = document.querySelector('#home-screen');
const questionScreen = document.querySelector('#question-screen');
const questionText = document.querySelector('#question-text');
const chooseButton = document.querySelector('#choose-question');
const backButton = document.querySelector('#back-button');
const status = document.querySelector('#status');

let questions = [];

async function loadQuestions() {
  if (questions.length) return questions;

  const response = await fetch('questions.txt');
  if (!response.ok) throw new Error('Não foi possível carregar as perguntas.');

  questions = (await response.text())
    .split(/\r?\n/)
    .map((question) => question.trim())
    .filter(Boolean);

  if (!questions.length) throw new Error('O arquivo de perguntas está vazio.');
  return questions;
}

function showStatus(message) {
  status.textContent = message;
  status.classList.add('is-visible');
  window.setTimeout(() => status.classList.remove('is-visible'), 3600);
}

function switchScreen(from, to) {
  from.hidden = true;
  from.classList.remove('is-active');
  to.hidden = false;
  to.classList.add('is-active', 'is-entering');
  window.setTimeout(() => to.classList.remove('is-entering'), 750);
}

async function chooseQuestion() {
  chooseButton.disabled = true;
  chooseButton.querySelector('span').textContent = 'Escolhendo…';

  try {
    const allQuestions = await loadQuestions();
    questionText.textContent = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    switchScreen(homeScreen, questionScreen);
    backButton.focus();
  } catch (error) {
    showStatus('Não foi possível abrir as perguntas. Tente novamente.');
    console.error(error);
  } finally {
    chooseButton.disabled = false;
    chooseButton.querySelector('span').textContent = 'Escolher uma pergunta';
  }
}

chooseButton.addEventListener('click', chooseQuestion);
backButton.addEventListener('click', () => {
  switchScreen(questionScreen, homeScreen);
  chooseButton.focus();
});
