const decrementBtn = document.querySelector(`[data-action = "decrement"]`);
const incrementBtn = document.querySelector(`[data-action = "increment"]`);
const valueEl = document.querySelector("#value");

let counterValue = 0

function changeValueEl(number) {
    valueEl.textContent = number
}

function decrement() {
    counterValue -= 1
    changeValueEl(counterValue)
}

function increment() {
    counterValue += 1
    changeValueEl(counterValue)
}

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment);