const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // Removing 'active-btn' class from previous button and adding it to currently pressed button

    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    };

    // Removing 'active' class from previous button and adding it to currenlty pressed button

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (id) {
            sectBtns.forEach((button) => {
                button.classList.remove('active');
            });
    
            e.target.classList.add('active');
    
            sections.forEach((section) => {
                section.classList.remove('active');
            });
    
            const element = document.getElementById(id);
            element.classList.add('active');
        };
    });
};

PageTransitions();