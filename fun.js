const div = document.querySelector('.container')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const butSub = document.querySelector('#goHome')
const msg = document.querySelector('.msg')
const msg2 = document.querySelector('.msg2')
const insm = document.querySelector('.ins')
const imgp = document.querySelector('img')
const isThis = document.querySelector('.isThis')
const arrow = document.querySelector('.arrow')
butArrow = document.querySelector('.arrow')
const audio = document.querySelector('audio')
butSub.addEventListener('click', (e) =>{
    e.preventDefault();
    if(firstName.value==='' || lastName.value==='')
    {
        msg.textContent = `FIELD CAN'T BE EMPTY`
        setTimeout(()=>msg.textContent='', 2000)
    }
    else if((firstName.value.trim()==='SIMON' || firstName.value.trim()==='Simon'||firstName.value.trim()==='simon')&&(lastName.value.trim()==='Chhantyal'||lastName.value.trim()==='chhantyal'||lastName.value.trim()==='CHHANTYAL') ){
         
        div.remove();
        insm.remove();
        isThis.style.display='block'  ;
        butArrow.style.display='block'  ;
        butArrow.addEventListener('click', e=>{
            isThis.remove();
            butArrow.remove();
            audio.play();
            imgp.style.display='block';

        })


    }
    else{
           msg2.textContent = 'PLZ ENTER YOUR REAL NAME'
           firstName.value = ''
           lastName.value = ''
        setTimeout(()=>msg2.textContent='',2000) 
    }

})

