const senha = '123456';
const email = 'tryber@teste.com';
const emailInput = document.getElementById('inputEmail');
const passwordInput = document.getElementById('inputPassword');
const loginButton = document.getElementById('loginBtn');
const agreeCheckbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const mainForm = document.getElementById('evaluation-form');
const nameInput = document.getElementById('input-name');
const lastnameInput = document.getElementById('input-lastname');
const emailFormInput = document.getElementById('input-email');

loginButton.addEventListener('click', () => {
  if (emailInput.value === email && passwordInput.value === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
agreeCheckbox.addEventListener('click', () => {
  submitButton.disabled = (!agreeCheckbox.checked);
});
textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});

function getHouseValue() {
  const houseList = document.getElementById('house').children;
  for (let index = 0; index < houseList.length; index += 1) {
    if (houseList[index].selected) {
      return houseList[index].value;
    }
  }
}

function getFamilyValue() {
  const familyList = document.querySelectorAll('[name="family"]');
  for (let index = 0; index < familyList.length; index += 1) {
    if (familyList[index].checked) {
      return familyList[index].value;
    }
  }
}

function getContentValues() {
  const contentList = document.querySelectorAll('[name="content"]');
  const valuesList = [];
  for (let index = 0; index < contentList.length; index += 1) {
    if (contentList[index].checked) {
      valuesList.push(contentList[index].value);
    }
  }
  return valuesList.join(', ');
}

function getRateValue() {
  const rateList = document.querySelectorAll('[name="rate"]');
  for (let index = 0; index < rateList.length; index += 1) {
    if (rateList[index].checked) {
      return rateList[index].value;
    }
  }
}

function printOutput() {
  return `<p>Nome: ${nameInput.value} ${lastnameInput.value}</p>
          <p>Email: ${emailFormInput.value}</p>
          <p>Casa: ${getHouseValue()}</p>
          <p>Família: ${getFamilyValue()}</p>
          <p>Matérias: ${getContentValues()}</p>
          <p>Avaliação: ${getRateValue()}</p>
          <p>Observações: ${textArea.value}</p>`;
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const pOutput = document.createElement('p');
  pOutput.innerHTML = printOutput();
  mainForm.innerHTML = '';
  mainForm.appendChild(pOutput);
});