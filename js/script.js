import { add } from './add.js';
import { minus } from './minus.js';
import { umnoshit } from './umnoshit.js';
import { delet } from './delet.js';

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const resultText = document.getElementById('resultText');

const addBtn = document.getElementById('add');
const minusBtn = document.getElementById('minus');
const umnoshitBtn = document.getElementById('umnoshit');
const deletBtn = document.getElementById('delet');

function getNumbers() {
    const aValue = input1.value.trim();
    const bValue = input2.value.trim();

    if (aValue === '' || bValue === '') {
        return null;
    }

    const a = Number(aValue);
    const b = Number(bValue);

    return [a, b];
}

function showError(message = 'Введите корректные числа') {
    resultText.textContent = message;
}

addBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        const [a, b] = numbers;
        resultText.textContent = add(a, b);
    } else {
        showError();
    }
});

minusBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        const [a, b] = numbers;
        resultText.textContent = minus(a, b);
    } else {
        showError();
    }
});

umnoshitBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        const [a, b] = numbers;
        resultText.textContent = umnoshit(a, b);
    } else {
        showError();
    }
});

deletBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        const [a, b] = numbers;
        if (b === 0) {
            showError('На 0 делить нельзя');
        } else {
            resultText.textContent = delet(a, b);
        }
    } else {
        showError();
    }
});