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

(function projectButton (){
    const projectFormContainer = document.querySelector('.projectFormContainer');
    const projectButton = document.querySelector('.projectButton');
    
    projectButton.addEventListener('click', ()=>{
        projectFormContainer.style.visibility = 'visible';
    });
})();

(function projectSubmit (){
    const submit = document.getElementById('submitProject');
    const projectContainer = document.querySelector('.projectContainer');
    submit.addEventListener('click', ()=>{
        const projectName = document.getElementById('projectName');
        const addProject = document.createElement('div');
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
    
    myProjects.at(i).tasks.forEach((e, i) =>{
        let task = document.createElement('div');
        task.classList.add('task')
        
        taskContainer.appendChild(task)

        let taskTitle = document.createElement('div');
        taskTitle.classList.add('taskTitle');
        taskTitle.textContent = e.title;
        task.appendChild(taskTitle);

        let taskDescription = document.createElement('div');
        taskDescription.classList.add('taskDescription')
        taskDescription.textContent = e.description;
        task.appendChild(taskDescription);

        let taskPriority = document.createElement('div');
        taskPriority.classList.add('taskPriority')
        taskPriority.textContent = e.priority;
        task.appendChild(taskPriority);

        let taskDueDate = document.createElement('div')
        taskDueDate.classList.add('showDueDate');
        taskDueDate.textContent = e.dueDate;
        task.appendChild(taskDueDate);

        let showDetailsAndEditButton = document.createElement('button');
        showDetailsAndEditButton.classList.add('showDetailsAndEdit');
        showDetailsAndEditButton.textContent = 'Details / Edit';
        task.appendChild(showDetailsAndEditButton);

        let taskDelete = document.createElement('button')
        taskDelete.classList.add('taskDelete');
        taskDelete.textContent = 'Delete';
        task.appendChild(taskDelete);
        taskDelete.addEventListener('click', ()=>{
            
            e = 0;
            task.remove();
            console.log(i)
            console.log(e);
            
            

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

        

}

    

        

        

        

        
            











    




        
        



            


            

            











    



