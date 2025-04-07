const tabMenu = document.querySelectorAll('.js-tabMenu li');
const tabContent= document.querySelectorAll('.js-tabContent section');

function activeTab(index) {
    tabContent.forEach((section) =>
        section.classList.remove('ativo') // toggle    
    )

    tabContent[index].classList.add('ativo');
}