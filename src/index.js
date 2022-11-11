let myProjects = [];


class Project {
    constructor(title, index, tasks){
        this.title = title
        this.index = index
        this.tasks = []
    }

}

class Task {
    constructor(title, description, priority, dueDate){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

(function createDefaultProject (){ 
    const projectContainer = document.querySelector('.projectContainer');
    
    const addProject = document.createElement('div');
    addProject.textContent = 'Default'
    projectContainer.appendChild(addProject);

    

    const contentHeader = document.querySelector('.contentHeader');
    contentHeader.textContent = addProject.textContent;

    const taskButton = document.getElementById('taskButton');
    taskButton.style.visibility = 'visibile';



    let title = addProject.textContent;
    let defaultProject = new Project(title);
    myProjects.push(defaultProject);

    projectClick()

    console.log(myProjects)
})();

(function projectButton (){
    const projectFormContainer = document.querySelector('.projectFormContainer');
    const projectButton = document.querySelector('.projectButton');
    const projectName = document.getElementById('projectName');
    
    projectButton.addEventListener('click', ()=>{
        projectName.value = '';
        projectFormContainer.style.visibility = 'visible';
        
    });
})();

(function projectSubmit (){
    const submit = document.getElementById('submitProject');
    const projectContainer = document.querySelector('.projectContainer');
    submit.addEventListener('click', ()=>{
        const projectName = document.getElementById('projectName');
        const addProject = document.createElement('div');
        addProject.classList.add('project');

        
        


        

        
        

        

        projectContainer.appendChild(addProject);

        addProject.textContent = projectName.value;
        
        let title = addProject.textContent;

        let projectObj = new Project(title)
        myProjects.push(projectObj)
        console.log(myProjects)

        projectClick()

        const projectFormContainer = document.querySelector('.projectFormContainer');
        projectFormContainer.style.visibility = 'hidden';



    });
})();

(function projectCancel (){
    const cancelProject = document.getElementById('cancelProject');
    const projectFormContainer = document.querySelector('.projectFormContainer')
    cancelProject.addEventListener('click', ()=>{
        projectFormContainer.style.visibility = 'hidden';

    });
})();

function taskButton (){

    

    const taskButton = document.getElementById('taskButton');
    taskButton.style.visibility = 'visible'
    const taskFormContainer = document.querySelector('.taskFormContainer');
    
    taskButton.addEventListener('click', ()=> {
        taskFormContainer.style.visibility = 'visible'

        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskPriority').value = '';
        document.getElementById('taskDueDate').value = '';

    })

}

        
function projectClick (){
    const projectContainer = document.querySelector('.projectContainer');
    let contentHeader = document.querySelector('.contentHeader');
    const taskContainer = document.querySelector('.taskContainer')
    Array.from(projectContainer.children).forEach((project, i) =>{

        
        if (project.children.length == 0) {
            let deleteProject = document.createElement('button')
            deleteProject.setAttribute('id', 'deleteProject')
            deleteProject.textContent = 'X';
            project.appendChild(deleteProject)
            deleteProject.addEventListener('click', ()=>{
                
                myProjects.splice(i,1);
                project.remove();

                console.log(myProjects);
    
            })

            

            

            

        }
        

        

        
        

        

        
        
        
        project.addEventListener('click',()=>{
            taskContainer.innerHTML = '';
            contentHeader.textContent = `${myProjects[i].title}`;
            displayTasks(i)
            createTask(i)
            taskButton()
            

            
            console.log(myProjects)
            console.log(i)
            
            
        })

        
        
        
        
        
    })
}

function displayTasks (i){

    
    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.innerHTML = '';

    let taskArray = myProjects.at(i).tasks;
    
    taskArray.forEach((e, i) =>{
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
        taskPriority.textContent = e.priority;
        task.appendChild(taskPriority);

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

        let taskEditAndSubmit = document.createElement('button');
        taskEditAndSubmit.classList.add('taskEditAndSubmit');
        taskEditAndSubmit.textContent = 'Submit';
        task.appendChild(taskEditAndSubmit);

        taskTitle.addEventListener('keypress', (k)=>{
            if (k.key == 'Enter'){
                e.title = taskTitle.value;
                e.description = taskDescription.value;
                e.priority = taskPriority.value;
                e.dueDate = taskDueDate.value;
                
                console.log(myProjects);
                taskTitle.blur();

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

            };

        })

        taskEditAndSubmit.addEventListener('click', ()=>{
            e.title = taskTitle.value;
            e.description = taskDescription.value;
            e.priority = taskPriority.value;
            e.dueDate = taskDueDate.value;

            if (e.priority == 'High Priority'){
                task.style.borderColor = 'red'
                highPriority.selected = true;
            } else if (e.priority == 'Low Priority'){
                task.style.borderColor = 'green'
                lowPriority.selected = true;
            } else {
                task.style.borderColor = 'black'
            }
    

            console.log(taskArray)


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

}




function createTask (i){

    const taskFormContainer = document.querySelector('.taskFormContainer');
    taskFormContainer.innerHTML = '';

    const taskContainer = document.querySelector('.taskContainer')

    

    

    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('id', 'taskTitle')
    taskTitle.placeholder = 'title';
    taskFormContainer.appendChild(taskTitle);

    const taskDescription = document.createElement('input');
    taskDescription.setAttribute('id', 'taskDescription');
    taskDescription.placeholder = 'description'
    taskFormContainer.appendChild(taskDescription);

    const taskPriority = document.createElement('select');
    taskPriority.setAttribute('id', 'taskPriority');
    taskFormContainer.appendChild(taskPriority);

    const highPriority = document.createElement('option');
    highPriority.value = 'High Priority'
    highPriority.textContent = 'High Priority'
    taskPriority.appendChild(highPriority);

    const lowPriority = document.createElement('option');
    lowPriority.value = 'Low Priority'
    lowPriority.textContent = 'Low Priority'
    taskPriority.appendChild(lowPriority);

    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('id', 'taskDueDate')
    taskDueDate.type = 'Date';
    taskDueDate.textContent = 'Due Date';
    taskFormContainer.appendChild(taskDueDate);

    const submitTask = document.createElement('button');
    submitTask.setAttribute('id', 'submitTask');
    submitTask.textContent = 'Submit'
    taskFormContainer.appendChild(submitTask);

    const cancelTask = document.createElement('button');
    cancelTask.setAttribute('id', 'cancelTask');
    cancelTask.textContent = 'Cancel'
    taskFormContainer.appendChild(cancelTask);

    

    submitTask.addEventListener('click', ()=>{
        

        

        let title = document.getElementById('taskTitle').value;
        let description = document.getElementById('taskDescription').value;
        let priority = document.getElementById('taskPriority').value;
        let dueDate = document.getElementById('taskDueDate').value;

        

        let taskObj = new Task (title, description, priority, dueDate)
        myProjects.at(i).tasks.push(taskObj);

        
        
        console.log(myProjects)
        console.log(priority)

        displayTasks(i)

        

        let taskFormContainer = document.querySelector('.taskFormContainer');
        taskFormContainer.style.visibility = 'hidden';
        
        

    })

    cancelTask.addEventListener('click', ()=>{
        taskFormContainer.style.visibility = 'hidden';

    })

        

}

document.querySelector('.allTasks').addEventListener('click', ()=>{
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
            taskPriority.textContent = e.priority;
            task.appendChild(taskPriority);
    
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
    
            let taskEditAndSubmit = document.createElement('button');
            taskEditAndSubmit.classList.add('taskEditAndSubmit');
            taskEditAndSubmit.textContent = 'Submit';
            task.appendChild(taskEditAndSubmit);

            taskTitle.addEventListener('keypress', (k)=>{
                if (k.key == 'Enter'){
                    e.title = taskTitle.value;
                    e.description = taskDescription.value;
                    e.priority = taskPriority.value;
                    e.dueDate = taskDueDate.value;
                    
                    console.log(myProjects);
                    taskTitle.blur();
    
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
    
                };
    
            })
    
            taskEditAndSubmit.addEventListener('click', ()=>{
                e.title = taskTitle.value;
                e.description = taskDescription.value;
                e.priority = taskPriority.value;
                e.dueDate = taskDueDate.value;
    
                if (e.priority == 'High Priority'){
                    task.style.borderColor = 'red'
                    highPriority.selected = true;
                } else if (e.priority == 'Low Priority'){
                    task.style.borderColor = 'green'
                    lowPriority.selected = true;
                } else {
                    task.style.borderColor = 'black'
                }
        
    
                console.log(taskArray)
    
    
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
})

    

        

        

        

        
            











    




        
        



            


            

            











    



