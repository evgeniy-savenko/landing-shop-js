const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) { //е.кей значние клавиши которое нажал пользвотель, матч мы имщем соответствие
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;