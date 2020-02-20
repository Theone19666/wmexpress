document.addEventListener('focusin', (event) => {
    if (event.target.closest('.inputWrapper__input')) {
        event.target.closest('.inputWrapper').querySelector('.inputWrapper__placeholder').style.display = 'none';
    }
});
document.addEventListener('focusout', (event) => {
    if (event.target.closest('.inputWrapper__input')) {
        event.target.closest('.inputWrapper').querySelector('.inputWrapper__placeholder').style.display = 'block';
    }
});
