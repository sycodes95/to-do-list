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

export default createDefaultProject