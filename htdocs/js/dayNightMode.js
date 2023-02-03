let pointOrDoublePoint;

if (location.pathname.includes('error') || location.pathname.includes('producto')) {
    pointOrDoublePoint = '..';
} else {
    pointOrDoublePoint = '.';
}


let dayNightStyle = document.querySelector('#dayNightStyle');

const dayNightButton = document.querySelector('#dayNightButton');
const dayNightButtonMobile = document.querySelector('#dayNightButtonMobile')

if (!localStorage.getItem('tema')) {
    localStorage.setItem('tema', 'moon');
    console.log(1);
} else {
    if (localStorage.getItem('tema').includes('sun')) {
        dayNightStyle.href = '#';
        dayNightButton.innerHTML = dayNightButton.innerHTML.replace('sun', localStorage.getItem('tema'));
        dayNightButtonMobile.innerHTML = dayNightButtonMobile.innerHTML.replace('sun', localStorage.getItem('tema'));


    } else if (localStorage.getItem('tema').includes('moon')) {
        dayNightStyle.href = `${pointOrDoublePoint}/css/dayNight.css`;
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

    }
}
