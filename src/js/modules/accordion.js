const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
        //   blocks = document.querySelectorAll(itemsSelector); //for css

    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            
            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

//Accordion maded with CSS styles
    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active-style')) {
    //             btns.forEach(function() {
    //                 this.classList.remove('active-content', 'active-style');
    //                 this.nextElementSibling.classList.add('active-content');
    //             });
    //             this.classList.add('active-style');
    //             this.nextElementSibling.classList.add('active-content');
    //             this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px';
    //         }
    //     });
    // });
};

export default accordion;