const verMasButtons = document.querySelectorAll('.ver-mas-button');

verMasButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const target = event.target;
        const title = target.parentElement.querySelector('.item-title');
        const url = title.textContent.replace(/ /g, '-');

        location.href = `./producto/${url}`;
    })
})