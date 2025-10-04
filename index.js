console.log('Happy developing ✨')

document.addEventListener('DOMContentLoaded', function() {

    const trigger = document.getElementById('moremenu');
    const content = document.getElementById('morecontent');
    const close = document.getElementsByClassName('close')[0];
    const closebutton = document.getElementsByClassName('closebutton')[0];
    const text = document.getElementsByClassName('text')[0];
    const download = document.getElementById('upload');

    //More List Expansion Event
    trigger.addEventListener('click', () => {

        content.classList.toggle('visible');

        trigger.classList.toggle('expanded');
    });

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

});
