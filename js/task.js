const taskInp = () =>{
    const input = document.getElementById('text-input').value;
    if (input == '') {
        alert('Input a task');
        return
    }
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('div');
    taskItem.innerHTML = `<div class="task-item"><div class="dot"></div><h3 class="col" contenteditable>${input}</h1></div>`;
    taskList.appendChild(taskItem);
    document.getElementById('text-input').value = '';
    console.log(input);
}