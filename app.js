
function newElement(){
    const todoListDom = document.querySelector('#list');
    let taskValue = document.querySelector('#task').value.trim();
    let lidom = document.createElement('li');
    if(!taskValue==""){ 
        lidom.innerHTML = `${taskValue} <span class="close">x</span>`;
        todoListDom.appendChild(lidom);
    }
    document.querySelector('#task').value = "";

    const closeButtons = document.querySelectorAll('.close');
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const listItem = this.parentElement;
                    listItem.remove();
                });
            });
    
    lidom.addEventListener('click', function(){
        this.classList.add('checked');
    })
}








