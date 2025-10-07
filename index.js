console.log('Happy developing ✨')

document.addEventListener('DOMContentLoaded', function() {
    //variables declaration
    const trigger = document.getElementById('moremenu');
    const content = document.getElementById('morecontent');
    const close = document.getElementsByClassName('close')[0];
    const closebutton = document.getElementsByClassName('closebutton')[0];
    const text = document.getElementsByClassName('text')[0];
    const download = document.getElementById('upload');
    const lever = document.getElementsByClassName('history')[0];
    const dia = document.getElementsByClassName('dia')[0];
    const history = document.getElementsByClassName('history')[0];
    const control = document.getElementsByClassName('control')[0];
    const account = document.getElementsByClassName('profile')[0];

    //More List Expansion Event , 2 phrases
    trigger.addEventListener('click', () => {

        content.classList.toggle('visible');

        trigger.classList.toggle('expanded');
    });

    lever.addEventListener('click', () => {
        dia.classList.toggle('visible');
        lever.classList.toggle('expanded');
    })


    //Upload Button Status Change
    download.classList.add('disabled');

    document.getElementsByClassName('text')[0].addEventListener('input', () => {
        if(text.value.trim() === ''){
            download.classList.add('disabled');
        }
        else {
            download.classList.remove('disabled');
        }
    });
    //Closing Button Event
    closebutton.addEventListener('click', () => {
        close.classList.add('disabled');
    });

    //Sidebar Hidden Effects
    history.addEventListener('click', () => {
       control.classList.toggle('disabled');
    });

    //login and register
    account.addEventListener('click', () => {

    });




});
