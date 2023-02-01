const titleElements = carouselSimple.querySelectorAll('.item-title');
let ryzen = [];
let intel = [];
for (let i = 0; i < titleElements.length; i++) {
    if (titleElements[i].textContent.toLowerCase().includes('ryzen')) {
        ryzen.push(titleElements[i]);
    } else if (titleElements[i].textContent.toLowerCase().includes('intel')) {
        intel.push(titleElements[i]);
    } else {
        throw new Error('No hay ningun elemento válido.');
    }
}

let ryzenModified = [];
for (let i = 0; i < ryzen.length; i++) {
    const elementCard = ryzen[i].closest('.card');
    ryzenModified.push(elementCard);
}

let intelModified = [];
for (let i = 0; i < intel.length; i++) {
    const elementCard = intel[i].closest('.card');
    intelModified.push(elementCard);
}

let intelCheckbox = document.querySelector('#intelCheckbox');
let ryzenCheckbox = document.querySelector('#ryzenCheckbox');

intelCheckbox.addEventListener('click', () => { intelCheckbox.classList.toggle("checkboxActive"); proccessorsInput1 = intelCheckbox; proccessorsInput2 = ryzenCheckbox; })
ryzenCheckbox.addEventListener('click', () => { ryzenCheckbox.classList.toggle("checkboxActive"); proccessorsInput1 = ryzenCheckbox; proccessorsInput2 = intelCheckbox; })

let proccessorsInput1;
let proccessorsInput2;


function proccessorsInput() {
    setTimeout(() => {
        intelCheckbox = document.querySelector('#intelCheckbox');
        ryzenCheckbox = document.querySelector('#ryzenCheckbox');

        if (intelCheckbox.classList.contains('checkboxActive') == false && ryzenCheckbox.classList.contains('checkboxActive') == false) {
            for (let i = 0; i < intelModified.length; i++) {
                intelModified[i].style.display = 'block';
            }
            for (let i = 0; i < ryzenModified.length; i++) {
                ryzenModified[i].style.display = 'block';
            }
            return;
        }

        if (proccessorsInput1 == intelCheckbox) {
            intelChecker();
            ryzenChecker();
        } else if (proccessorsInput1 == ryzenCheckbox) {
            ryzenChecker();
            intelChecker();
        }

        function intelChecker() {
            if (intelCheckbox.classList.contains('checkboxActive')) {
                for (let i = 0; i < intelModified.length; i++) {
                    intelModified[i].style.display = 'block';
                    ryzenCheckbox.classList.remove('checkboxActive');
                }
            } else {
                for (let i = 0; i < intelModified.length; i++) {
                    intelModified[i].style.display = 'none';
                }
            }
        }

        function ryzenChecker() {
            if (ryzenCheckbox.classList.contains('checkboxActive')) {
                for (let i = 0; i < ryzenModified.length; i++) {
                    ryzenModified[i].style.display = 'block';
                    intelCheckbox.classList.remove('checkboxActive');
                }
            } else {
                for (let i = 0; i < ryzenModified.length; i++) {
                    ryzenModified[i].style.display = 'none';
                }
            }
        }
    }, 100)
}