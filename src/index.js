import allTasks from './allTasks'
import createDefaultProject from './createDefault'

let myProjects;
if (localStorage !== null){
    myProjects = JSON.parse(localStorage.getItem('myProjects'))
    projectClick()
} else {
    myProjects = [];
    createDefaultProject();

}


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
/*
function createDefaultProject (){ 

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
};
*/


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
        projectContainer.innerHTML = '';
        projectContainer.textContent = 'Projects'
        const projectName = document.getElementById('projectName');
        

        

        
        
        let title = projectName.value;

        let projectObj = new Project(title)
        myProjects.push(projectObj)
        console.log(myProjects)

        

        projectClick()

        const projectFormContainer = document.querySelector('.projectFormContainer');
        projectFormContainer.style.visibility = 'hidden';

        localStorage.setItem('myProjects', JSON.stringify(myProjects));
        
        
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

    projectContainer.innerHTML = ''
    projectContainer.textContent = 'Projects'

    myProjects.forEach((proj, i) =>{
        const project = document.createElement('div');
        project.classList.add('project')
        
        projectContainer.appendChild(project);

        const projectTitle = document.createElement('div');
        projectTitle.classList.add('projectTitle')
        projectTitle.textContent = proj.title;
        project.appendChild(projectTitle);


        let deleteProject = document.createElement('button')
        deleteProject.setAttribute('id', 'deleteProject')
        deleteProject.textContent = 'X';
        project.appendChild(deleteProject)
        deleteProject.addEventListener('click', ()=>{

            
            
            myProjects.splice(i,1);
            project.remove();
            projectClick()

            if (contentHeader.textContent == proj.title){
                allTasks(myProjects)

            }
            localStorage.setItem('myProjects', JSON.stringify(myProjects));
            
            
            
            
            

            console.log(myProjects);

        })

        projectTitle.addEventListener('click',()=>{
            taskContainer.innerHTML = '';
            contentHeader.textContent = proj.title;
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
        taskDelete.textContent = 'X';
        task.appendChild(taskDelete);
        taskDelete.addEventListener('click', ()=>{
            
            taskArray.splice(i , 1);
            task.remove();
            console.log(i)
            console.log(e);
            console.log(taskArray)
            localStorage.setItem('myProjects', JSON.stringify(myProjects));
            
            

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

    const noPriority = document.createElement('option');
    noPriority.value = 'No Priority';
    noPriority.textContent = 'No Priority';
    taskPriority.appendChild(noPriority);

    
    

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
        localStorage.setItem('myProjects', JSON.stringify(myProjects));
        console.log(localStorage)

        
        
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
    allTasks(myProjects)
})

window.addEventListener('DOMContentLoaded', ()=> {
    allTasks(myProjects)

})

    

        

        

        

        
            











    




        
        



            


            

            











    



