const textEl = document.getElementById('text');
const inputEl = document.getElementById('font-size-control');

const onChangeText = event => {
    const size = event.currentTarget.value;

    textEl.style.fontSize = size + 'px';
};

inputEl.addEventListener('input', onChangeText);