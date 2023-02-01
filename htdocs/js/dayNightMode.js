let pointOrDoublePoint;

if (location.pathname.includes('error') || location.pathname.includes('products')) {
    pointOrDoublePoint = '..';
} else {
    pointOrDoublePoint = '.';
}

const createElement = document.createElement("link");

document.head.append(createElement);
createElement.outerHTML = '<link rel="stylesheet" id="dayNightStyle">';

let dayNightStyle;
setTimeout(() => {
    dayNightStyle = document.querySelector('#dayNightStyle');
}, 1)


console.log(createElement);

const dayNightButton = document.querySelector('#dayNightButton');
const dayNightButtonMobile = document.querySelector('#dayNightButtonMobile')

if (!localStorage.getItem('tema')) {
    localStorage.setItem('tema', 'sun');
} else {
    if (localStorage.getItem('tema').includes('sun')) {
        setTimeout(() => {
            dayNightStyle.href = '#';
        }, 2)


    } else if (localStorage.getItem('tema').includes('moon')) {
        dayNightButton.innerHTML = dayNightButton.innerHTML.replace('sun', localStorage.getItem('tema'));
        dayNightButtonMobile.innerHTML = dayNightButtonMobile.innerHTML.replace('sun', localStorage.getItem('tema'));
        setTimeout(() => {
            dayNightStyle.href = `${pointOrDoublePoint}/css/dayNight.css`;
        }, 2)

    } else {
        throw new Error('no')
    }
}

dayNightButton.addEventListener('click', dayNightButtonClicked);
dayNightButtonMobile.addEventListener('click', dayNightButtonClicked);




function dayNightButtonClicked() {
    if (dayNightButton.innerHTML.includes('sun')) {
        dayNightButton.innerHTML = dayNightButton.innerHTML.replace('sun', 'moon');
        dayNightButtonMobile.innerHTML = dayNightButtonMobile.innerHTML.replace('sun', 'moon');
        dayNightStyle.href = `${pointOrDoublePoint}/css/dayNight.css`;
        localStorage.setItem('tema', 'moon');

    } else if (dayNightButton.innerHTML.includes('moon')) {
        dayNightButton.innerHTML = dayNightButton.innerHTML.replace('moon', 'sun');
        dayNightButtonMobile.innerHTML = dayNightButtonMobile.innerHTML.replace('moon', 'sun');
        dayNightStyle.href = '#';
        localStorage.setItem('tema', 'sun');

    } else {
        throw new Error('no existe un tema');
    }
}
