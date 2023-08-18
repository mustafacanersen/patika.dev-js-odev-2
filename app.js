
function newElement(){
    const todoListDom = document.querySelector('#list');
    let taskValue = document.querySelector('#task').value.trim();
    let lidom = document.createElement('li');
    if(!taskValue==""){
        lidom.innerHTML = `${taskValue} <span class="close">x</span>`;
        todoListDom.appendChild(lidom);
        let listHTML = $('#list').html();
        localStorage.setItem("todolist", listHTML);
    }
    document.querySelector('#task').value = "";
}

function checked(){
    lidom.addEventListener('click', function(){
        this.classList.add('checked');
    })
}
$(document).ready(function() {
    $('#list').on('click', '.close', function() {
      $(this).parent().remove(); 
      updateLocalStorage(); 
    });

    function updateLocalStorage() {
      let listHTML = $('#list').html();
      localStorage.setItem("todolist", listHTML);
    }

    let storedList = localStorage.getItem("todolist");
    if (storedList) {
      $('#list').html(storedList);
    }

    $('#list').on('click', 'li', function() {
        $(this).addClass('checked'); 
      });
  });
  








