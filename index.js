function clickAlert()
{
    alert('I was clicked');
}

function addingEventListener() {
    const input = document.getElementById('input');
    const secondDiv = document.querySelector('div ~ div');

    input.addEventListener('click', clickAlert); 
    secondDiv.addEventListener('click', clickAlert);
}

addingEventListener();