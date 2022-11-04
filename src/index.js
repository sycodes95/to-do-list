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
                    myProjects.push(projectNameInput.value);
                    projects.appendChild(project)
                }
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
                

(function viewProject () {

})()

            
                
                
                
                



        

       
        
    