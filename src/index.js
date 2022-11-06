let myProjects = [];


   





(function addProject (){
    const addProject = document.querySelector('.addProject');
    addProject.addEventListener('click', ()=> {
        let formContainer = document.querySelector('.formContainer');

        if (formContainer.children.length < 1){
            let addProjectForm = document.createElement('div');
            addProjectForm.classList.add('addProjectForm');
            formContainer.appendChild(addProjectForm)

            let projectNameInput = document.createElement('input');
            projectNameInput.classList.add('projectNameInput');
            projectNameInput.maxLength = 25;
            addProjectForm.appendChild(projectNameInput);

            let projectAddInput = document.createElement('button');
            projectAddInput.classList.add('projectAddInput');
            projectAddInput.textContent = 'Add';
            addProjectForm.appendChild(projectAddInput);

            projectAddInput.addEventListener('click', ()=>{
                const projects = document.querySelector('.projects');
                
                
                if (projectNameInput.value == ''){
                    return
                } else {
                    const project = document.createElement('div');
                    
                    project.textContent = projectNameInput.value;
                    project.setAttribute('id',`${projectNameInput.value}`)
                    project.classList.add('projectHeader')
                    projects.appendChild(project)

                    
                    
                    populateProject()
                    
                    
                }

                projectNameInput.value = '';
            });

            let projectCancelInput = document.createElement('button');
            projectCancelInput.classList.add('projectCancelInput');
            projectCancelInput.textContent = 'Cancel';
            addProjectForm.appendChild(projectCancelInput);

            projectCancelInput.addEventListener('click', ()=>{
                formContainer.innerHTML = '';
            });
            
        };

        
    });
})();

class Task{
    constructor(project, title, description, priority, dueDate){
        this.project = project;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}
                



function populateProject (){
    let projects = document.querySelector('.projects')
    Array.from(projects.children).forEach((e, i) =>{
        e.addEventListener('click', ()=>{

            
            //for each div under '.projects' adds an event listener
            const content = document.querySelector('.content')
            content.innerHTML = '';
            const contentHeader = document.createElement('div');
            contentHeader.classList.add('contentHeader')

            contentHeader.textContent = e.textContent;
            content.appendChild(contentHeader);

            const todoContainer = document.createElement('div');
            todoContainer.classList.add('todoContainer');
            content.appendChild(todoContainer);

            function addToDo (){

                let myProjectsIndex = myProjects.at(i)

                console.log(myProjectsIndex)

            }    
                
                


            /*

            function addToDo (){
                myProjects.forEach((e)=>{
                    e.forEach((e)=>{
                        let doc = document.createElement('div');
                        doc.textContent = `${e.title}`
                        todoContainer.appendChild(doc)
                    })
                    
                })

            }

            */

            addToDo()

            
            

            

            
            

            

            

            
            
            
            


            
            


            
            

            let addTaskButton = document.createElement('button');
            addTaskButton.classList.add('addTaskButton')
            addTaskButton.textContent = 'Add Task';
            content.appendChild(addTaskButton);
            addTaskButton.addEventListener('click', ()=>{

                if (document.querySelector('.addTaskContainer')==null){
                    let addTaskContainer = document.createElement('div');
                    addTaskContainer.classList.add('addTaskContainer')
                    content.appendChild(addTaskContainer);
                    
                    let addTaskTitle = document.createElement('input');
                    addTaskTitle.classList.add('addTaskTitle');
                    addTaskTitle.placeholder = 'Title'
                    addTaskContainer.appendChild(addTaskTitle);
                    
                    let addTaskDescription = document.createElement('input');
                    addTaskDescription.classList.add('addTaskDescription');
                    addTaskDescription.placeholder = 'Description'
                    addTaskContainer.appendChild(addTaskDescription)

                    let addTaskPriority = document.createElement('select');
                    addTaskPriority.classList.add('addTaskPriority');
                    addTaskPriority.textContent = 'Priority'
                    addTaskContainer.appendChild(addTaskPriority);

                    let priorityHigh = document.createElement('option');
                    priorityHigh.setAttribute('id', 'priorityHigh');
                    priorityHigh.textContent = 'High priority';
                    addTaskPriority.appendChild(priorityHigh);

                    let priorityLow = document.createElement('option');
                    priorityLow.setAttribute('id', 'priorityLow');
                    priorityLow.textContent = 'Low priority';
                    addTaskPriority.appendChild(priorityLow);

                    let submitTask = document.createElement('button');
                    submitTask.setAttribute('id', 'submitTask');
                    submitTask.textContent = 'Submit'
                    addTaskContainer.appendChild(submitTask)

                    submitTask.addEventListener('click',()=>{

                        
                        
                        let project = e.textContent;
                        let title = addTaskTitle.value;
                        let description = addTaskDescription.value;
                        let priority = addTaskPriority.value;
                        

                        let createTask = new Task (project, title, description, priority);
                        let taskArray = []

                        taskArray.push(createTask);
                        myProjects.push(taskArray)

                        

                        let toDo = document.createElement('div');
                        toDo.classList.add('toDo');
                        todoContainer.appendChild(toDo);
                        toDo.textContent = 'test'

                        addToDo();

                        

                        

                        
                    })


                    let cancelTask = document.createElement('button');
                    cancelTask.setAttribute('id', 'cancelTask');
                    cancelTask.textContent = 'Cancel'
                    addTaskContainer.appendChild(cancelTask)

                    cancelTask.addEventListener('click', ()=> {
                        document.querySelector('.addTaskContainer').remove();
                    })

                } else {
                    return
                }

                

                /*

                Array.from(myProjects.at(i)).forEach((e,i) =>{
                    let toDo = document.createElement('div')
                    todoContainer.appendChild(toDo);
    
                    let taskTitle = document.createElement('div')
                    taskTitle.textContent = `${this.title}`;
                    todoContainer.appendChild(taskTitle)
                })
                */

                
                
                

                

                
            })

            console.log(myProjects)
            
            
            
            

            

            

            /* now i need an event listener for a button that appends to .content that adds a todo task which then gets pushed into an array as an object and that array stores the task objects that then shows on the DOM. 
            */

        })
    })

    
    
}




/*
function addTask (){
    
    
}
*/




/*
projectChildren.addEventListener('click', ()=> {
    alert ('hi')
})
*/

