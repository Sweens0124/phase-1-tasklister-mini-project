document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const newTask = e.target[ 'new-task-description' ].value;
    const li = document.createElement('li')
    li.textContent = newTask
    document.getElementById('tasks').appendChild(li)
  })

  //delete function that remove task from your list
  function delete(task) {
    const toDoList = document.querySelector('ul li')
    const btn = document.createElement('button')
    btn.textContent = "X"
    toDoList.appendChild(btn)
  }
  
  //document.querySelector('ul li').addEventListener('click', )

});


