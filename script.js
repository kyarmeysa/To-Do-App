

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');



eventListeners();

function eventListeners() {

    form.addEventListener('submit', addNewItem);
    taskList.addEventListener('click', DeleteItem);
    btnDeleteAll.addEventListener('click', DeleteAll)
}


function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    }



    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));


    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';


    li.appendChild(a);


    taskList.appendChild(li);


    input.value = '';

    e.preventDefault();

}
function DeleteItem(e) {
    if (confirm('Are You Sure You Want To Delete This Item?')) {
        if (e.target.className === 'fas fa-times') {
            e.target.parentElement.parentElement.remove();
        }
    }

    e.preventDefault();


}
function DeleteAll(e) {
    if (confirm('Are You Sure You Want To Delete All Items?')) {
        taskList.innerHTML='';
      

        
    }


    e.preventDefault();
}
