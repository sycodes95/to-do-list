function allTasks (myProjects){
    const taskButton = document.getElementById('taskButton')
    taskButton.style.visibility = 'hidden';
    const taskFormContainer = document.querySelector('.taskFormContainer');
    taskFormContainer.style.visibility = 'hidden';
    document.querySelector('.contentHeader').textContent = 'All'
    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.innerHTML = '';
    myProjects.forEach((e,i)=>{
        let taskArray = e.tasks
        taskArray.forEach((e,i)=>{
            console.log(e)

            

            

            

            let task = document.createElement('div');
            task.classList.add('task')
    
            
            
            
            taskContainer.appendChild(task)
    
            let taskTitle = document.createElement('input');
            taskTitle.classList.add('taskTitle');
            taskTitle.value = e.title;
            task.appendChild(taskTitle);
    
            let taskDescription = document.createElement('input');
            taskDescription.classList.add('taskDescription')
            taskDescription.value = e.description;
            task.appendChild(taskDescription);
    
            let taskPriority = document.createElement('select');
            taskPriority.classList.add('taskPriority')
            task.appendChild(taskPriority);

            taskPriority.addEventListener('change', (evt)=>{
                if (evt.currentTarget.value == 'No Priority'){
                    
                    evt.currentTarget.value = noPriority.value;
                    e.priority = evt.currentTarget.value;
                    task.style.borderColor = 'black';
                    console.log(myProjects);
                    noPriority.blur();
                    localStorage.setItem('myProjects', JSON.stringify(myProjects));
            
                    
                } else if (evt.currentTarget.value == 'Low Priority'){
                    evt.currentTarget.value = lowPriority.value;
                    e.priority = evt.currentTarget.value;
                    task.style.borderColor = 'green';
                    console.log(myProjects);
                    lowPriority.blur();
                    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    
    
                } else if (evt.currentTarget.value == 'High Priority'){
                    evt.currentTarget.value = highPriority.value;
                    e.priority = evt.currentTarget.value;
                    task.style.borderColor = 'red';
                    console.log(myProjects);
                    highPriority.blur();
                    localStorage.setItem('myProjects', JSON.stringify(myProjects));
                }
    
            })

            let noPriority = document.createElement('option');
            noPriority.classList.add('noPriority');
            noPriority.value = 'No Priority';
            noPriority.textContent = 'No Priority';
            taskPriority.appendChild(noPriority);
    
            let lowPriority = document.createElement('option');
            lowPriority.classList.add('lowPriority');
            lowPriority.value = 'Low Priority';
            lowPriority.textContent = 'Low Priority'
            taskPriority.appendChild(lowPriority);
    
            
    
            let highPriority = document.createElement('option');
            highPriority.classList.add('highPriority');
            highPriority.value = 'High Priority';
            highPriority.textContent = 'High Priority'
            taskPriority.appendChild(highPriority);
    
            
    
            let taskDueDate = document.createElement('input')
            taskDueDate.classList.add('showDueDate');
            taskDueDate.type = 'Date';
            taskDueDate.value = e.dueDate;
            task.appendChild(taskDueDate);

            taskDueDate.addEventListener('change', (date)=>{
                date.currentTarget.value = taskDueDate.value;
                e.dueDate = date.currentTarget.value;
                console.log(e)
                localStorage.setItem('myProjects', JSON.stringify(myProjects));
    
            })
    
            

            taskTitle.addEventListener('keypress', (k)=>{
                if (k.key == 'Enter'){
                    e.title = taskTitle.value;
                    e.description = taskDescription.value;
                    e.priority = taskPriority.value;
                    e.dueDate = taskDueDate.value;
                    
                    console.log(myProjects);
                    taskTitle.blur();
                    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    
                };
            });
    
            taskDescription.addEventListener('keypress', (k)=>{
                if (k.key == 'Enter'){
                    
                    e.title = taskTitle.value;
                    e.description = taskDescription.value;
                    e.priority = taskPriority.value;
                    e.dueDate = taskDueDate.value;
                    
                    console.log(myProjects);
                    taskDescription.blur();
                    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    
                };
    
            })
    
            
            
    
            if (e.priority == 'High Priority'){
                task.style.borderColor = 'red'
                highPriority.selected = true;
            } else if (e.priority == 'Low Priority'){
                task.style.borderColor = 'green'
                lowPriority.selected = true;
            } else {
                task.style.borderColor = 'black'
            }
                
                
                
    
    
    
            let taskDelete = document.createElement('button')
            taskDelete.classList.add('taskDelete');
            taskDelete.textContent = 'Delete';
            task.appendChild(taskDelete);
            taskDelete.addEventListener('click', ()=>{
                
                taskArray.splice(i , 1);
                task.remove();
                console.log(i)
                console.log(e);
                console.log(taskArray)
                
                
    
            })

            
        })
    })

}

export default allTasks