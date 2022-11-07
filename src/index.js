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
    });
})();

function taskButton (){
    const taskButton = document.getElementById('taskButton');
    const taskFormContainer = document.querySelector('.taskFormContainer');
    taskButton.addEventListener('click', ()=> {
        taskFormContainer.style.visibility = 'visible'

    })

}

function submitTask (i){
    const submitTask = document.getElementById('submitTask');

    const taskContainer = document.querySelector('.taskContainer')
    taskContainer.innerHTML = '';

    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const taskPriority = document.getElementById('taskPriority');

    submitTask.addEventListener('click', ()=>{

        


        let title = document.getElementById('taskTitle').value;
        let description = document.getElementById('taskDescription').value;
        let priority = document.getElementById('taskPriority').value

        let taskObj = new Task (title, description, priority)
        myProjects.at(i).tasks.push(taskObj);
        

        

        

        
        
        console.log(myProjects)

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
            
            

            
            console.log(myProjects)
            console.log(i)
            
            
        })

        displayTasks(i)
        submitTask(i)
        taskButton()
        
    })
}

function displayTasks (i){

    
    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.innerHTML = '';
    myProjects.at(i).tasks.forEach((e) =>{
        let task = document.createElement('div');
        task.textContent = e.title;
        taskContainer.appendChild(task)


    })

}


        
        
        
        
        


        
        



            


            

            











    



