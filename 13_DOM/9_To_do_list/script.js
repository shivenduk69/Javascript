let btn = document.querySelector('.btn');
let middleBox = document.querySelector('.middleBox');
let input = document.querySelector('input');



btn.addEventListener('click', ()=>{
    let addedBox = document.createElement('div');
    let doneButton = document.createElement('button');
    let removeButton = document.createElement('button');
    
    doneButton.innerText = 'Done';
    removeButton.innerText = 'Remove';

    doneButton.classList.add('doneButton');
    removeButton.classList.add('removeButton');

    let li = document.createElement('li');
    li.classList.add('lib');
    li.innerText = input.value;
    li.style.color = 'white';
    li.style.backgroundColor = 'Black';
    middleBox.appendChild(li);
    li.appendChild(doneButton);
    li.appendChild(removeButton);

    doneButton.addEventListener('click', ()=>{
        let del = document.createElement('del');
        del.appendChild(li);
        middleBox.appendChild(del);
    })

    removeButton.addEventListener('click', ()=>{
        li.remove();
    })
    
    
})
