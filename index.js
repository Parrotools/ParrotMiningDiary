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
    let dia = document.getElementsByClassName('dia')[0];
    const history = document.getElementsByClassName('history')[0];
    const control = document.getElementsByClassName('control')[0];
    const account = document.getElementsByClassName('profile')[0];
    const replies = [
      "1","2","3","4","5","6","7","8","9","10","11","12"
    ];
    let dialog = dia.querySelectorAll('a');
    let newDia = document.querySelector('.new-dia');
    let chatContainer = document.querySelector('.chat');



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

    //Send msg
    document.getElementsByClassName('chat')[0].classList.add('disabled');

    download.addEventListener('click', () => {
        if(text.value.trim() !== '') {
            const info = text.value.trim();
            document.getElementsByClassName('buttons')[0].classList.add('disabled');
            document.getElementsByClassName('chat')[0].classList.remove('disabled');
            closebutton.click();
            text.value = '';
            download.classList.add('disabled');
            addMessageToChat(info,'sent');
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            addMessageToChat(randomReply,'replies');

        }

    });
    text.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            download.click();
        }
    })
    function addMessageToChat(text,type) {
        const message = document.createElement('div');
        message.className = `msgBubbles ${type === 'sent' ? 'sent-message' : 'received-message'}`;
        message.textContent = text;
        document.getElementsByClassName('chat')[0].appendChild(message);
    }

    //New & Histories

    newDia.addEventListener('click', () => {

        chatContainer.innerHTML = '';


       document.querySelectorAll('.dia a').forEach(item =>
       {
           item.classList.remove('activedia');
       });


        document.querySelector('.hello').style.display = 'block';
        document.querySelector('.buttons').classList.remove('disabled');
        chatContainer.classList.add('disabled');


        const newHisDialog = document.createElement('a');
        newHisDialog.className = 'dialog activedia';
        newHisDialog.href = '#';
        newHisDialog.textContent = `🏛历史对话${dia.querySelectorAll('a').length + 1}`;

        newHisDialog.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.dia a').forEach(item => {
                item.classList.remove('activedia')
            });
            newHisDialog.classList.add('activedia');

        });

        dia.appendChild(newHisDialog);

        dialog.push(newHisDialog);
    });
    setActive(0);
    function setActive(index) {
        dia.querySelectorAll('a').forEach(item =>
        {
            item.classList.remove('activedia')
        });
        if (dialog[index]) {
            dialog[index].classList.add('activedia');
        }
    }

    dialog.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            setActive(index);
        });
    });


});
