(function () {
    'use strict';
    const input = document.querySelector('#txtTitulo');
    const txtArea = document.querySelector('#txtDescricao');
    const form = document.querySelector('.formCadastro');
    const miss = form.querySelector('#contador span');
    const btn = document.querySelector('#btn');
    const feedbackMessage = document.querySelector('#feedbackMessage');
    const max = txtArea.maxLength;
    const feedbackMessageCloseBtn = feedbackMessage.querySelector('button')

    const showNumber = (n) => {
        miss.textContent = n
    };

    showNumber(max);

    // form.querySelector('#contador').style.display = 'block';
    form.querySelector('#contador').removeAttribute('style');

    const verification = (e) => {
        let isSomeEmpty = input.value === '' && txtArea.value === '';
        if (isSomeEmpty) {
            e.preventDefault()
            showErrorMessage('Preencha todos os campos corretamente', () => input.focus())
        };
    };

    const showErrorMessage = (msg, cb) => {
        feedbackMessage.classList.add('show');
        feedbackMessage.firstElementChild.textContent = msg;
        feedbackMessageCloseBtn.focus();

        const hideErrorMessage = () => {
            feedbackMessage.classList.remove('show');

            feedbackMessage.removeEventListener('click', hideErrorMessage);
            feedbackMessageCloseBtn.removeEventListener('keyup', pressedKeyBoardOnBtn);
            
            typeof cb === 'function' && cb();
        };

        const pressedKeyBoardOnBtn = e => {
            if (e.keyCode === 27) {
                hideErrorMessage()
            };

        };

        feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage);

        feedbackMessageCloseBtn.addEventListener('keyup', pressedKeyBoardOnBtn);
    };

    const checkLength = (e) => {
        let numbersTyped = e.currentTarget.value.length;
        let charactersRemaning = parseInt(max) - parseInt(numbersTyped);
        showNumber(charactersRemaning);
        
    };
    
    btn.disabled = true;
    
    const checkedAccepted = form.querySelector('#chkAceito');
    const checkedAcceptedIsTrue = (e) => {
        btn.disabled = !e.currentTarget.checked
    };
    
    checkedAccepted.addEventListener('change', checkedAcceptedIsTrue);
    txtArea.addEventListener('input', checkLength);
    form.addEventListener('submit', verification);
})();